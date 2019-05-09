<template>
  <div class="accomodations">
    <h2>Accomodations</h2>
    <ul>
      <li>
        <h4>Hilton Garden Inn</h4>
        <h5>(Ooh you fancy)</h5>
        <Button :path="hilton" text="Book Now" />
      </li>
      <li>
        <h4>Embassy Suites</h4>
        <h5>You like your porridge just right)</h5>
        <Button :path="hilton" text="Book Now" />
      </li>
      <li>
        <h4>Homewood Suites</h4>
        <h5>(Ballin' on a budget)</h5>
        <Button :path="homewood" text="Book Now" />
      </li>
    </ul>
  </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
  name: 'Accomodations',
  components: {
    Button,
  },
};
</script>

<style scoped lang="scss">
h2 {
  font-size: 4rem;
}
ul {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;
  width: 100%;
  li {
    display: inline;
  }
}
</style>
