<template>
  <div
    class="toggle"
  >
    <div class="toggle__body">
      <Radio
        :value="value"
        class="toggle__radio"
        @input="handleInput"
      />
      <slot />
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import Radio from '@/components/radio';

export default {
  components: {
    Radio,
  },
  props: {
    value: VueTypes.bool,
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss">
  .toggle {
    &__radio {
      margin-right: 1rem;
    }

    &__body {
      display: flex;
      align-items: center;
    }
  }
</style>
