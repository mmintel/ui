<template>
  <button
    :is="component"
    :href="href ? href : undefined"
    :to="to"
    :disabled="disabled"
    :class="classes"
    :type="nativeType"
    v-on="$listeners"
  >
    <span
      v-if="$slots.icon"
      class="button__icon"
    >
      <slot name="icon" />
    </span>
    <span
      v-if="$slots.badge"
      class="button__badge"
    >
      <slot name="badge" />
    </span>
    <span
      v-if="$slots.default"
      class="button__label"
    >
      <slot />
    </span>
  </button>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  props: {
    type: VueTypes.oneOf([
      'default',
      'primary',
      'success',
      'error',
      'link',
    ]).def('default'),
    size: VueTypes.oneOf([
      'small',
      'medium',
      'large',
    ]).def('medium'),
    nativeType: VueTypes.oneOf([
      'submit',
      'button',
    ]),
    to: VueTypes.oneOfType([
      VueTypes.object,
      VueTypes.string,
    ]),
    attached: VueTypes.oneOf([
      'left',
      'right',
    ]),
    href: VueTypes.string,
    text: VueTypes.bool.def(false),
    fake: VueTypes.bool.def(false),
    icon: VueTypes.bool.def(false),
    dense: VueTypes.bool.def(false),
    disabled: VueTypes.bool.def(false),
    block: VueTypes.bool.def(false),
  },
  computed: {
    component() {
      if (this.to && this.$nuxt) return 'nuxt-link';
      if (this.to && !this.$nuxt && this.$router) return 'router-link';
      if (this.href) return 'a';
      if (this.fake) return 'span';
      return 'button';
    },
    classes() {
      return [
        'button',
        `button--${this.type}`,
        `button--${this.size}`,
        this.$slots.badge ? 'button--has-badge' : null,
        this.$slots.icon ? 'button--has-icon' : null,
        this.fake ? 'button--fake' : null,
        this.text ? 'button--text' : null,
        this.icon ? 'button--icon': null,
        this.dense ? 'button--dense' : null,
        this.disabled ? 'button--disabled' : null,
        this.block ? 'button--block' : null,
        this.attached ? `button--attached-${this.attached}` : null,
      ];
    },
  },
};
</script>

<style lang="scss">
@import '~@mmintel/ui-core/styles/abstracts/sr-only';
@import '~@mmintel/ui-core/styles/abstracts/font-size';

.button {
  $types: (
    default,
    primary,
    success,
    error,
    text,
    link,
  );

  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--font-color);
  line-height: var(--line-height);
  border-radius: var(--radius-3);
  display: inline-flex;
  align-items: center;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: font-size(-2);
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;

  svg {
    transition: fill 0.5s ease-in-out;
  }

  &:focus {
    outline: none;
  }

  &--large {
    font-size: font-size(1);
    padding: 0.75rem 1rem;
  }

  @each $type in $types {
    &--#{$type} {
      &:not([disabled]) {
        color: var(--button-#{$type}-color);
        background-color: var(--button-#{$type}-background-color);

        svg {
          fill: var(--button-#{$type}-color);
        }
      }

      &:hover:not([disabled]):not(.button--fake) {
        outline: none;
        color: var(--button-#{$type}-hover-color);
        background-color: var(--button-#{$type}-hover-background-color);

        svg {
          fill: var(--button-#{$type}-hover-color);
        }
      }
    }
  }

  &--fake {
    cursor: auto;
    user-select: auto;
  }

  &--dense {
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }

  &--disabled {
    cursor: not-allowed;
    background-color: var(--color-gray-8);
    color: var(--color-gray-5);

    svg {
      fill: var(--color-gray-5);
    }
  }

  &--block {
    display: flex;
    width: 100%;
  }

  &__label {
    white-space: nowrap;
  }

  &__icon {
    display: inline-flex;
    align-items: center;
    margin-right: 0.75rem;
  }

  &--has-icon {
    justify-content: flex-start;
  }

  &--icon {
    border-radius: 100%;
    padding: 0.375rem;
  }

  &--icon &__label {
    @include sr-only;
  }

  &--icon &__icon {
    margin-right: 0;
  }

  &__badge {
    position: absolute;
    top: -0.25rem;
    right: -0.25rem;
  }

  &--attached-left {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &--attached-right {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
