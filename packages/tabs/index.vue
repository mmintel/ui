<template>
  <div class="tabs">
    <ul class="tabs__heads">
      <li
        v-for="tab in tabs"
        :key="tab"
        :class="[ active === tab ? 'tabs__head--active' : null ]"
        class="tabs__head"
        @click="handleHeadClick(tab)"
      >
        <slot :name="`head:${tab}`" />
      </li>
    </ul>
    <slot />
    <slot :name="`panel:${active}`" />
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    active: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    handleHeadClick(tab) {
      this.$emit('change', tab);
    },
  },
};
</script>

<style lang="scss">
.tabs {
  width: 100%;

  &__heads {
    width: 100%;
    display: flex;
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  &__head {
    flex: 1;
    cursor: pointer;
    user-select: none;
    font-size: 0.5rem;
    padding: 0.5rem;
    text-transform: uppercase;
    text-align: center;
    border-bottom: 2px solid var(--tabs-head-border-color);
    border-top-left-radius: var(--radius-1);
    border-top-right-radius: var(--radius-1);
    font-weight: bold;
    transition: background-color 0.5s ease-in-out;
  }

  &__head--active {
    background-color: var(--tabs-head-active-background-color);
    border-bottom-color: var(--tabs-head-active-border-color);
  }
}
</style>
