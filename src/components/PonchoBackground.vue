<template>
  <div class="background" :style="{'backgroundImage': `url(${require('@/assets/poncho.jpg')})`}">
      <slot>Stuff</slot>
  </div>
</template>


<script>
export default {
  name: 'PonchoBackground',
};
</script>

<style scoped lang="scss">
.background {
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  left: 0;
  position: relative;
  top: 0;
  z-index:  -1;
}
</style>
