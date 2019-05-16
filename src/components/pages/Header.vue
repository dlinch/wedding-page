<template>
  <div class="header">
    <MountainBackground>
      <div class="content">
        <h3>Derik & Ashley</h3>
        <h1>We're Getting Married!</h1>
        <h2>September 13, 2019 | Boulder | Colorado</h2>
        <Button :path="rsvp" text="RSVP" />
      </div>
    </MountainBackground>
  </div>
</template>

<script>
import MountainBackground from '../MountainBackground.vue';
import Button from '../Button.vue';

export default {
  name: 'HeaderPage',
  components: {
    MountainBackground,
    Button,
  },
  data() {
    return {
      rsvp: 'http://linchrunyan.rsvpify.com',
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/variables.scss';

.content {
  height: 100vh;
  display: grid;
  grid-template: 60% 10% 10% 10% 10% / 50% 50%;
}

h1, h2 {
  color: $oxblood;
  text-shadow: 1px 1px 4px white;
}

h1 {
  grid-column: 2;
  grid-row: 2;
}

h2 {
  grid-column: 2;
  grid-row: 3;
}

h3 {
  font-size: 2.5rem;
  color: $blue;
  grid-column: 2;
  grid-row: 1;
  margin: 15% 15% 0 0;
}

.button {
  grid-column: 2;
  grid-row: 4;
  margin: 2rem auto 0;
}

@media screen and (max-width: 480px) {
  h1, h2 {
    font-size: 1.5rem;
  }

  .button {
    width: 120px;
  }
}
</style>
