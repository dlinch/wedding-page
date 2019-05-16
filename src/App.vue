<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/variables.scss';
@import 'normalize-scss';
@include normalize();

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text;
}

body, html {
  min-width: 100%;
}

a, a:visited, a:hover {
  color: $text;
}
</style>
