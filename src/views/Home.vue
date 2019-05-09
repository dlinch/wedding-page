<template>
  <div class="home">
    <Header />
    <Details />
    <Accomodations />
    <Registry />
  </div>
</template>

<script>
// @ is an alias to /src
import Accomodations from '@/components/pages/Accomodations.vue';
import Header from '@/components/pages/Header.vue';
import Details from '@/components/pages/Details.vue';
import Registry from '@/components/pages/Registry.vue';

export default {
  name: 'home',
  components: {
    Accomodations,
    Details,
    Header,
    Registry,
  },
};
</script>
