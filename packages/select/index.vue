<template>
  <div>
    <label :for="name">{{ label }}</label>
    <select
      ref="select"
      :value="mutableValue"
      :name="name"
      :multiple="multiple"
      :taggable="taggable"
      v-bind="attributes"
      @change="updateValue"
    >
      <option
        :value="null"
      >
        -
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  props: {
    options: VueTypes.arrayOf([
      VueTypes.shape({
        label: String,
        value: String,
      }),
    ]),
    value: VueTypes.string.def(''),
    label: VueTypes.string.isRequired,
    name: VueTypes.string.isRequired,
    placeholder: VueTypes.string,
    invalid: VueTypes.bool.def(false),
    autofocus: VueTypes.bool.def(false),
    multiple: VueTypes.bool.def(false),
    taggable: VueTypes.bool.def(false),
    attribuets: VueTypes.object,
  },
  data() {
    return {
      mutableValue: this.value,
    };
  },
  watch: {
    autofocus(value) {
      if (value) {
        this.focus();
      }
    },
  },
  mounted() {
    if (this.autofocus) {
      this.focus();
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    updateValue(e) {
      this.mutableValue = e.target.value;
      this.$emit('change', this.mutableValue);
      this.$emit('input', this.mutableValue);
    },
  },
};
</script>
