<template>
  <div>
    <Background href="@/assets/mountainscape.jpg"/>
    <h3>Derik & Ashley</h3>
    <h1>We're Getting Married!</h1>
    <h2>September 13, 2019 | Boulder | Colorado</h2>
    <Button path="google.com" text="RSVP" />
  </div>
</template>

<script>
import Background from '@/components/Background.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'HeaderPage',
  components: {
    Background,
    Button,
  }
}
</script>

<script scoped lang="scss">

</script>