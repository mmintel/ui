<template>
  <div
    class="radio"
    @click="handleClick"
  >
    <div
      ref="knob"
      class="radio__knob"
    ></div>
  </div>
</template>

<script>
import anime from 'animejs';
import VueTypes from 'vue-types';

export default {
  props: {
    value: VueTypes.bool,
  },
  data() {
    return {
      mutableValue: this.value,
    };
  },
  watch: {
    value(value) {
      this.mutableValue = value;
    },
    mutableValue(value) {
      if (value) {
        anime({
          targets: this.$refs.knob,
          translateX: '-50%',
        });
      } else {
        anime({
          targets: this.$refs.knob,
          translateX: '0',
        });
      }
    },
  },
  mounted() {
    if (this.mutableValue) {
      this.$refs.knob.style.transform = 'translateX(-50%)';
    } else {
      this.$refs.knob.style.transform = 'translateX(0)';
    }
  },
  methods: {
    handleClick() {
      this.mutableValue = !this.mutableValue;
      this.$emit('input', this.mutableValue);
    },
  },
};
</script>

<style lang="scss">
  %radio-shape {
    width: 2em;
    height: 1em;
    border-radius: var(--radius-3);
  }
  .radio {
    @extend %radio-shape;
    overflow: hidden;
    position: relative;
    border: 1px solid var(--color-gray-5);
    background-color: var(--color-gray-8);

    &__knob {
      @extend %radio-shape;
      position: absolute;
      left: 50%;
      background-color: var(--color-primary-5);

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 1em;
        height: 1em;
        border-radius: 100%;
        background-color: var(--color-white);
      }
    }
  }
</style>
