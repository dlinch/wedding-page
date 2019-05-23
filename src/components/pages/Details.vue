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
      <!-- eslint-disable-next-line -->
      <p>{{ details1 }}</p>
      <p>{{ details2 }}</p>
      <div class="links">
        <ul>
          <li>
            <font-awesome-icon icon="glass-cheers" />
            Ceremony | 6:00pm
          </li>
          <li>
            <font-awesome-icon icon="calendar-alt" />
            <a :href="calendar">
              September 13th, 2019
            </a>
          </li>
          <li>
            <font-awesome-icon icon="map" />
            <a :href="map">
              38470 Boulder Canyon Dr. Boulder, CO
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
      // eslint-disable-next-line
      calendar: 'https://calendar.google.com/event?action=TEMPLATE&tmeid=MjJiYzM3YXM5N3N0dnFyODAycnY2M3ExOGYgZGxpbmNoMzNAbQ&tmsrc=dlinch33%40gmail.com',
      // eslint-disable-next-line
      details1: 'Hi there! If you are reading this, that means you are probably invited to our wedding. If not, then feel free to buy us something off the registry below anyway! We are madly in love and want to spend the rest of their lives together, so you are cordially invited to wach us get hitched and then celebrate with us afterwards! You can expect cake, a buffet, some adult beverages, and plenty of dancing.',
      // eslint-disable-next-line
      details2: 'Our ceremony starts promptly at 6pm, so please start arriving around 5:30pm. We love your little ones, but we want you to party hardy so please plan on childcare accordingly as our wedding is adults only. We have some room blocks set up at some hotels in nearby Boulder, but feel free to stay whever you want! The party ends at 11pm and then the night is yours. There is a button on the first photo to RSVP, so please let us know if you are coming. We know the invites say RSVP by June 13th, and what we totally meant was by July 13th :)',
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
  height: 150vh;
  text-align: center;
}

ul {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style: none;

  li {
    width: 30%;
    font-size: 1.2rem;
  }
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
  height: 40%;

  h2 {
    margin: 0;
    padding: 3rem 0 1.5rem;
    font-size: 4rem;
  }
  > p {
    width: 60%;
    margin: auto;
    text-align: left;
    padding-bottom: 3rem;
  }
}

@media screen and (max-width: 480px) {
   ul {
     justify-content: space-around;
     li {
      font-size: 1rem;
     }
   }

  .details {
    height: 140vh;
  }

  .image-content {
    font-size: 1.5rem;

    span:first-child {
      margin-top: 6px;
    }
  }

  .background {
    height: 30%;
  }

  .information {
    height: 70%;

    h2 {
      font-size: 2rem;
    }
    p {
      width: 90%;
    }
  }
}
</style>
