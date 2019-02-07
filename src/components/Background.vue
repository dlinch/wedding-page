<template>
  <div class="background" :style="{'backgroundImage': `url(${require('@/assets/black_beach.jpg')})`}">

  </div>
</template>

<style scoped lang="scss">
.background {
  background-image: center;
  background-repeat: no-repeat;
  background-size: cover;
  left: 0;
  min-height: 50rem;
  position: relative;
  top: 0;
  width: 100%;
  z-index:  -1;
}
</style>

<script>
export default {
  name: 'Background',
};
</script>
