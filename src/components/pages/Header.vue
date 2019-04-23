<template>
  <div class="header">
    <MountainBackground>
      <h3>Derik & Ashley</h3>
      <h1>We're Getting Married!</h1>
      <h2>September 13, 2019 | Boulder | Colorado</h2>
      <RedButton :path="rsvp" text="RSVP" />
    </MountainBackground>
  </div>
</template>

<script>
import MountainBackground from '../MountainBackground.vue';
import RedButton from '../RedButton.vue';

export default {
  name: 'HeaderPage',
  components: {
    MountainBackground,
    RedButton,
  },
  data() {
    return {
      rsvp: 'http://linchrunyan.rsvpify.com',
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  height: 100vh;
}

.background {
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
}
</style>
