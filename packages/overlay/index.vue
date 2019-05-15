<template>
  <transition
    :css="false"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <div
      v-if="value"
      class="overlay"
      @click="close"
    >
      <div
        ref="child"
        @click.stop
      >
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import anime from 'animejs';
export default {
  props: {
    value: {
      type: Boolean,
      default: () => false,
    },
  },
  mounted() {
    if (process.client) {
      window.addEventListener('keyup', this.handleKeyUp);
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('keyup', this.handleKeyUp);
    }
  },
  methods: {
    close() {
      this.$emit('close');
      this.$emit('input', false);
    },
    handleKeyUp(event) {
      if (event.key === 'Escape') {
        this.close();
      }
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      this.$refs.child.style.transform = 'translateY(-100%)';
    },
    enter(el, complete) {
      const timeline = anime.timeline({
        targets: el,
        duration: 2000,
        opacity: 1,
        complete,
      });
      timeline.add({
        targets: this.$refs.child,
        translateY: 0,
      });
      timeline.finished.then(complete);
    },
    leave(el, complete) {
      el.style.pointerEvents = 'none';
      const timeline = anime.timeline({
        targets: this.$refs.child,
        translateY: '-100%',
      });
      timeline.add({
        targets: el,
        opacity: 0,
      });
      timeline.finished.then(complete);
    },
  },
};
</script>

<style lang="scss">
  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: z-index(5);
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: var(--overlay-background-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
