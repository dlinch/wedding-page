<template>
  <div class="home">
    <Header />
    <Details />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/pages/Header.vue';
import Details from '@/components/pages/Details.vue';

export default {
  name: 'home',
  components: {
    Details,
    Header,
  },
};
</script>
