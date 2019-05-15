<template>
  <div
    :is="tag"
    class="tooltip"
    :class="[ `tooltip--${position}` ]"
  >
    <div
      v-if="$slots.activator"
      class="tooltip__activator"
      @mouseover="handleMouseover"
      @mouseout="handleMouseout"
    >
      <slot name="activator" />
    </div>
    <div
      v-if="$slots.default"
      v-show="open"
      class="tooltip__flyout"
    >
      <Icon
        name="chevron-right"
        class="tooltip__icon"
        size="large"
      />
      <slot />
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import Icon from '@/components/icon';

export default {
  components: {
    Icon,
  },
  props: {
    position: VueTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left',
    ]).def('left'),
    tag: VueTypes.string.def('div'),
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    handleMouseover() {
      this.open = true;
    },
    handleMouseout() {
      this.open = false;
    },
  },
};
</script>

<style lang="scss">
  .tooltip {
    position: relative;

    &__flyout {
      position: absolute;
      z-index: z-index(1);
      box-shadow: var(--shadow-2);
      border-radius: var(--radius-2);
      padding: 0.5rem;
      background: var(--color-white);
    }

    &__activator {
      cursor: pointer;
    }

    &__icon {
      position: absolute;
    }

    &--top &__flyout {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 1.5rem;
    }

    &--right &__flyout {
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      margin-left: 1.5rem;
    }

    &--bottom &__flyout {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 1.5rem;
    }

    &--left &__flyout {
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      margin-right: 1.5rem;
    }

    &--top &__icon {
      top: 100%;
      left: 50%;
      transform: translateX(-50%) rotate(90deg);
    }

    &--right &__icon {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
    }

    &--bottom &__icon {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%) rotate(-90deg);
    }

    &--left &__icon {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }

  }
</style>
