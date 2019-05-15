<template>
  <div
    class="text-field"
    :class="[
      invalid ? 'text-field--invalid' : null,
      attached ? `text-field--attached-${attached}` : null,
      center ? `text-field--${center}` : null,
      `text-field--size-${size}`,
    ]"
  >
    <label
      class="text-field__label"
      :for="name"
    >
      {{ label }}
    </label>
    <Tooltip>
      <input
        slot="activator"
        ref="input"
        class="text-field__input"
        :type="type"
        :name="name"
        :placeholder="$t(placeholder)"
        :value="value"
        :autofocus="autofocus"
        :minlength="minlength"
        :maxlength="maxlength"
        :min="min"
        :max="max"
        v-bind="attributes"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <span v-if="!!invalid">
        {{ errors && errors.items && errors.items.length ? errors.items[0].msg : '' }}
      </span>
    </Tooltip>
    <span
      v-if="invalid"
      class="text-field__invalid-indicator"
    ></span>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import Tooltip from '@/components/tooltip';

export default {
  components: {
    Tooltip,
  },
  props: {
    type: VueTypes.oneOf([
      'text',
      'password',
      'email',
      'number',
      'tel',
    ]).def('text'),
    attributes: VueTypes.object,
    value: VueTypes.oneOfType([
      String,
      Number,
    ]),
    attached: VueTypes.oneOf([
      'left',
      'right',
    ]),
    size: VueTypes.oneOf([
      'medium',
      'large',
    ]).def('medium'),
    label: VueTypes.string.isRequired,
    name: VueTypes.string.isRequired,
    placeholder: VueTypes.string,
    minlength: VueTypes.string,
    maxlength: VueTypes.string,
    min: VueTypes.string,
    max: VueTypes.string,
    invalid: VueTypes.bool.def(false),
    autofocus: VueTypes.bool.def(false),
    center: VueTypes.bool.def(false),
  },
  data() {
    return {
      mutableValue: this.value,
    };
  },
  computed: {
    submitData() {
      return {
        name: this.name,
        label: this.value,
        type: this.type,
        value: this.mutableValue,
      };
    },
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
    updateValue(value) {
      this.mutableValue = value;
    },
    handleInput(e) {
      this.updateValue(e.target.value);
      this.$emit('input', this.mutableValue);
    },
    handleFocus(e) {
      this.$emit('focus', this.submitData);
    },
    handleBlur(e) {
      this.$emit('blur', this.submitData);
    },
  },
};
</script>

<style lang="scss">
  .text-field {
    position: relative;

    &__input {
      box-sizing: border-box;
      width: 100%;
      border-radius: var(--radius-1);
      border: 1px solid var(--input-border-color);
      transition: box-shadow 0.5s ease-in-out;

      &:hover {
        border-color: var(--input-hover-border-color);
      }

      &:focus {
        outline: none;
        border-color: var(--input-focus-border-color);
        box-shadow: 0 0 0 3px var(--input-focus-box-shadow-color);
      }
    }

    &__label {
      @include sr-only;
    }

    &__invalid-indicator {
      position: absolute;
      right: 5px;
      top: 50%;
      margin-top: -2px;
      display: block;
      border-radius: 100%;
      background-color: red;
      width: 8px;
      height: 8px;
    }

    &--center &__input {
      text-align: center;
    }

    &--size-medium &__input {
      padding: 0.25rem 0.5rem;
      font-size: font-size(1);
    }

    &--size-large &__input {
      padding: 0.75rem 1rem;
      font-size: font-size(3);
    }

    &--attached-left &__input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &--attached-right &__input {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
</style>
