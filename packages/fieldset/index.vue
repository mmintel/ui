<template>
  <div>
    <template
      v-for="field in schema"
    >
      <Select
        v-if="field.type === 'select'"
        :key="field.name"
        v-model="mutableData[field.name]"
        v-validate="selectValidator(field.validate, field.options)"
        class="my-2"
        :name="field.name"
        :label="$t(field.label)"
        :options="translateOptions(field.options)"
        :attributes="field.attributes"
        type="select"
      />
      <Field
        v-else
        :key="field.name"
        v-model="mutableData[field.name]"
        v-validate="field.validate"
        class="my-2"
        :placeholder="field.placeholder"
        :name="field.name"
        :label="$t(field.label)"
        :type="field.nativeType"
        :attributes="field.attributes"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
      />
    </template>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import Select from '@/components/select';
import Field from '@/components/field';

export default {
  components: {
    Select,
    Field,
  },
  props: {
    schema: VueTypes.arrayOf(VueTypes.shape({
      name: VueTypes.string.isRequired,
      type: VueTypes.oneOf([
        'text',
        'select',
      ]),
      nativeType: VueTypes.oneOf([
        'text',
        'password',
        'email',
        'number',
      ]),
      attributes: VueTypes.object,
      options: VueTypes.arrayOf([
        VueTypes.shape({
          label: String,
          value: String,
        }),
      ]),
      label: String,
      placeholder: String,
      validate: String,
      default: VueTypes.oneOfType([
        String,
        Function,
      ]),
    })).isRequired,
    value: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      mutableData: this.copySchemaFieldsFromValue(),
    };
  },
  methods: {
    selectValidator(validator, options) {
      const optionsValidator = `included:${this.optionValuesToList(options)}`;
      if (validator) {
        return `${validator}|${optionsValidator}`;
      } else {
        return optionsValidator;
      }
    },
    getFieldValue(schemaItem) {
      if (this.data) return this.data[schemaItem.name];
      let value = '';
      if (typeof schemaItem.default === 'function') {
        value = schemaItem.default(this.$store);
      } else if (schemaItem.default) {
        value = schemaItem.default;
      }
      return value;
    },
    copySchemaFieldsFromValue() {
      return this.schema.reduce((acc, schemaItem) =>
        ({ ...acc, [schemaItem.name]: this.getFieldValue(schemaItem) }), {}
      );
    },
    optionValuesToList(options) {
      const values = options.map((item) => item.value);
      return values.join(',');
    },
    translateOptions(options) {
      return options.map((item) => ({ ...item, label: this.$t(item.label) }));
    },
    handleInput(field) {
      this.$emit('input', this.mutableData);
    },
    handleFocus(field) {
      this.$emit('focus', {
        data: this.mutableData,
        field,
      });
    },
    handleBlur(field) {
      this.$emit('blur', {
        data: this.mutableData,
        field,
      });
    },
    async validate() {
      return this.$validator.validate();
    },
    async submit() {
      const valid = await this.validate();
      if (!valid) {
        return this.$notify({
          title: 'Invalid data',
          type: 'error',
          text: 'Please check the entered data.',
        });
      }
      this.$emit('submit', this.mutableData, this.data);
    },
  },
};
</script>
