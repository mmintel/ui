<template>
  <span
    :is="tag"
    :class="classes"
  >
    <slot />
  </span>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  props: {
    tag: VueTypes.string.def('span'),
    size: VueTypes.oneOf([
      'nano',
      'mini',
      'small',
      'medium',
      'large',
      'gigantic',
    ]).def('medium'),
    dimmed: VueTypes.bool.def(false),
    bold: VueTypes.bool.def(false),
    scream: VueTypes.bool.def(false),
    center: VueTypes.bool.def(false),
    limit: VueTypes.bool.def(false),
  },
  computed: {
    classes() {
      return [
        'type',
        `type--size-${this.size}`,
        this.dimmed ? 'type--dimmed' : null,
        this.bold ? 'type--bold' : null,
        this.scream ? 'type--scream' : null,
        this.center ? 'type--center' : null,
        this.limit ? 'type--limit' : null,
      ];
    },
  },
};
</script>

<style lang="scss">
  .type {
    &--size-nano {
      font-size: font-size(-3);
    }

    &--size-mini {
      font-size: font-size(-2);
    }

    &--size-small {
      font-size: font-size(-1);
    }

    &--size-medium {
      font-size: font-size(0);
    }

    &--size-big {
      font-size: font-size(1);
    }

    &--size-large {
      font-size: font-size(2);
    }

    &--size-gigantic {
      font-size: font-size(3);
    }

    &--bold {
      font-weight: bold;
    }

    &--scream {
      font-weight: bold;
      text-transform: uppercase;
    }

    &--center {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }

    &--limit {
      max-width: 50ch;
    }
  }
</style>
