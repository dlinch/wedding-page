<template>
  <div class="background" :style="{'backgroundImage': `url(${require('@/assets/mountainscape.jpg')})`}">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'MountainBackground',
};
</script>

<style scoped lang="scss">
.background {
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  left: 0;
  min-height: 100vh;
  position: relative;
  top: 0;
}
</style>
