<template>
  <!-- <div class="background" :style="{'backgroundImage': `url(${require(href)})`}"></div> -->
  <div class="background" :style="{'backgroundImage': `url(${require('@/assets/mountainscape.jpg')})`}">
      <slot>Stuff</slot>
  </div>
</template>


<script>
export default {
  name: 'Background',
  props: {
    href: String,
  },
};
</script>

<style scoped lang="scss">
.background {
  display: inline;
  background-position: center;
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
