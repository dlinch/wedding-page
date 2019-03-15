<template>
  <div class="header-page">
    <Background href="@/assets/mountainscape.jpg"/>
    <h3>Derik & Ashley</h3>
    <h1>We're Getting Married!</h1>
    <h2>September 13, 2019 | Boulder | Colorado</h2>
    <RedButton path="google.com" text="RSVP" />
  </div>
</template>

<script>
import Background from '@/components/Background.vue';
import RedButton from '@/components/RedButton.vue';

export default {
  name: 'HeaderPage',
  components: {
    Background,
    RedButton,
  },
};
</script>

<script scoped lang="scss">

</script>
