<template>
  <div class="details">
    <PonchoBackground>
      <div class="image-content">
        <span>Come Join Us!</span>
        <span>Friday, September 13, 2019</span>
      </div>
    </PonchoBackground>
    <div class="information">
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
    </div>
  </div>
</template>

<script>
import PonchoBackground from '@/components/PonchoBackground.vue';

export default {
  name: 'Details',
  components: {
    PonchoBackground,
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
@import '@/variables.scss';

.details {
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
}

.background {
  width: 100%;
  height: 60%;
}

.image-content {
  display: grid;
  height: 100%;
  grid-template: 1fr 1fr 1fr 1fr 1fr / 1fr 1fr;
  color: $tan;
  font-size: 2rem;

  span {
    grid-column: 2;
    grid-row: 2;
    text-shadow: 2px 2px 5px black;
  }

  span:nth-child(2) {
    margin: 3rem;
  }
}

.information {
  background-color: $tan;
  height: 40%;

  h2 {
    margin: 0;
    padding: 3rem 0 1.5rem;
    font-size: 4rem;
  }
  > p {
    padding-bottom: 3rem;
  }
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
