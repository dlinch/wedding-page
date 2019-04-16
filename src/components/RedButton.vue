<template>
  <div class="button">
    <a :href="path" target="_blank">{{ text }}</a>
  </div>
</template>

<script>
export default {
  name: 'RedButton',
  props: {
    path: String,
    text: String,
  },
};
</script>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #360615;
  width: 240px;
  height: 47px;

  a, a:visited {
    color: #eae4d4;
    text-decoration: none;

    &:hover {
      color: cornflowerblue;
    }
  }
}
</style>
