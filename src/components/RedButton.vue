<template>
  <div class="button">
    <a :href="path" target="_blank">{{ text }} Button!</a>
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
  background-color: #360615;
  width: 240px;
  height: 47px;
}
</style>