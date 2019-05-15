<template>
  <div
    v-click-outside="handleClickOutside"
    class="dropdown"
    :class="[ `dropdown--${direction}` ]"
  >
    <div
      v-if="$slots.activator"
      class="dropdown__activator"
      @click="handleClick"
    >
      <slot name="activator" />
    </div>
    <div
      v-if="open"
      class="dropdown__flyout"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  props: {
    direction: VueTypes.oneOf([
      'left',
      'right',
    ]).def('left'),
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    handleClick() {
      this.open = !this.open;
    },
    handleClickOutside() {
      this.open = false;
    },
  },
};
</script>

<style lang="scss">
  .dropdown {
    position: relative;

    &--left {
      .dropdown__flyout {
        left: 0;
      }
    }

    &--right {
      .dropdown__flyout {
        right: 0;
      }
    }

    &__flyout {
      position: absolute;
      top: 100%;
      box-shadow: var(--shadow-2);
      border-radius: var(--radius-2);
      padding: 0.5rem;
      background: var(--color-white);
      min-width: 10rem;
    }

    &__activator {
      cursor: pointer;
    }
  }
</style>
