<template>
  <div class="home">
    <Header />
    <Details />
    <Registry />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/pages/Header.vue';
import Details from '@/components/pages/Details.vue';
import Registry from '@/components/pages/Registry.vue';

export default {
  name: 'home',
  components: {
    Details,
    Header,
    Registry,
  },
};
</script>
