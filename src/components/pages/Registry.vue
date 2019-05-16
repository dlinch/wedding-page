<template>
  <div class="registry">
    <h2>Registry</h2>
    <h4>We are registered at the following stores:</h4>
    <a
      class="zola-registry-embed"
      href="https://www.zola.com/registry/derikandashley"
      data-registry-key="derikandashley">
      Our Zola Wedding Registry
    </a>
    <div class="footer">Ashley & Derik | 9.13.2019</div>
  </div>
</template>

<script>
export default {
  name: 'Registry',
};
</script>

<style scoped lang="scss">
@import '@/variables.scss';

.registry {
  height: 100vh;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
}


h2 {
  margin: 15% 0 1%;
  font-size: 4rem;
}

h4 {
  font-size: 1.2rem;
  margin: 0 0 15%;
}

h2, h4, .footer {
  flex-shrink: 0;
}

a {
  flex-grow: 1;
}

.footer {
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12%;
  width: 100%;
  font-size: 2.2rem;
  background-color: $blue;
  color: $tan;
}

@media screen and (max-width: 480px) {
  h2 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1rem;
  }
}

.footer {
  font-size: 1.5rem;
  height: 8%;
}
</style>
