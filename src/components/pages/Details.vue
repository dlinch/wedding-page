<template>
  <div class="details">
    <PonchoBackground>
      <!-- <div class="background"> -->
        <span>Come Join Us!</span>
        <span>Friday, September 13, 2019</span>
      <!-- </div> -->
    </PonchoBackground>
    <h2>The Details</h2>
    <p>Stuff in here</p>
    <div class="links">
      <ul>
        <li>
          Ceremony | 5:00pm
        </li>
        <li>
          September 13th, 2019
        </li>
        <li>
          <a :href="map">
            38470 Boulder Canyon Dr. Boulder, CO 80302
          </a>
        </li>
      </ul>
    </div>
    <div class="accomodations">
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
  </div>
</template>

<script>
import PonchoBackground from '@/components/PonchoBackground.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Details',
  components: {
    PonchoBackground,
    Button,
  },
  data() {
    return {
      hilton: 'http://hiltongardeninn.hilton.com/en/gi/groups/personalized/W/WBUBOGI-RLW-20190912/index.jhtml',
      homewood: 'http://homewoodsuites.hilton.com/en/hw/groups/personalized/B/BOUCOHW-RLW-20190912/index.jhtml',
      // eslint-disable-next-line
      map: 'https://www.google.com/maps/place/38470+Boulder+Canyon+Dr,+Boulder,+CO+80302/@40.0097955,-105.3275964,17z/data=!3m1!4b1!4m5!3m4!1s0x876bebe4a9f03ae3:0xa86e7ade6be6d345!8m2!3d40.0097914!4d-105.3254077',
    };
  },
};
</script>

<style scoped lang="scss">
.background {
  width: 100%;
  height: 30%;
}
.details {
  height: 100vh;
  text-align: center;
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

.accomodations {
  background-color: '#819da0';
}

</style>
