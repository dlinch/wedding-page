<template>
  <div class="header">
    <Background href="@/assets/mountainscape.jpg">
      <h3>Derik & Ashley</h3>
      <h1>We're Getting Married!</h1>
      <h2>September 13, 2019 | Boulder | Colorado</h2>
      <RedButton path="https://www.google.com" text="RSVP" />
    </Background>
  </div>
</template>

<script>
import Background from '../Background.vue';
import RedButton from '../RedButton.vue';

export default {
  name: 'HeaderPage',
  components: {
    Background,
    RedButton,
  },
};
</script>

<style scoped lang="scss">
.header {
  height: 100vh;
}
</style>
