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
        <h5>(You like your porridge just right)</h5>
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
.accomodations {
  width: 100vw;
  height: 40vh;
}

h2 {
  font-size: 4rem;
}

ul {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: 60%;

  li {
    width: 30%;
  }
}

@media screen and (max-width: 480px) {
  h2 {
    font-size: 2rem;
  }
  ul {
     justify-content: space-between;
   }

  .button {
    width: 120px;
  }
}
</style>
