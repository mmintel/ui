<template lang="html">
  <div class="center">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
