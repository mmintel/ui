<template>
  <div
    class="card"
    :class="{
      'card--raised': raised,
      'card--flat': flat,
      'card--hover': hover
    }"
  >
    <div
      v-if="$slots.head || $slots.cta"
      class="card__head"
    >
      <div
        class="card__title"
      >
        <slot name="head" />
      </div>
      <div
        v-if="$slots.cta"
        class="card__cta"
      >
        <slot name="cta" />
      </div>
    </div>
    <div
      v-if="$slots.default"
      class="card__body"
    >
      <slot />
    </div>
    <div
      v-if="$slots.foot || $slots.actions"
      class="card__foot"
    >
      <slot name="foot" />
      <div
        v-if="$slots.actions"
        class="card__actions"
      >
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    raised: {
      type: Boolean,
      default: () => false,
    },
    flat: {
      type: Boolean,
      default: () => false,
    },
    hover: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-1);
    background-color: var(--raised-background-color);
    color: var(--font-color);
    box-shadow: var(--shadow-2);
    transition: box-shadow 0.5s ease-in-out;

    &--raised {
      box-shadow: var(--shadow-5);
    }

    &--flat {
      box-shadow: none;
    }

    &--hover {
      &:hover {
        box-shadow: var(--shadow-5);
      }
    }

    &__head {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--color-gray-9);
      padding: 1rem;
    }

    &__cta {
      margin-left: 1rem;
    }

    &__body {
      width: 100%;
      flex: 1;
      padding: 1rem;
    }

    &__foot {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      border-top: 1px solid var(--color-gray-9);
      padding: 1rem;
    }

    &__actions {
      margin-left: auto;
    }
  }
</style>
