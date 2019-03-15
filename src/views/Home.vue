<template>
  <div class="home">
    <HeaderPage />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import HeaderPage from '@/components/pages/HeaderPage.vue';

export default {
  name: 'home',
  components: {
    HeaderPage,
    HelloWorld,
  },
};
</script>
