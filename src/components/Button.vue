<template>
  <div class="button">
    <a :href="path" target="_blank">{{ text }}</a>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    path: String,
    text: String,
  },
};
</script>

<style scoped lang="scss">
@import '@/variables.scss';

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $blue;
  width: 200px;
  height: 47px;

  a, a:visited {
    color: $tan;
    text-decoration: none;

    &:hover {
      color: cornflowerblue;
    }
  }
}
</style>
