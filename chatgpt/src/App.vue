<template>
  <nav>
    <router-link to="/">Chat GPT</router-link>
    <router-link to="/imageGenerate">Image Generate</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: darkorange;
    opacity: 0.5;
    position: relative;
    margin-right: 10px;
    text-decoration: none;
    font-weight: 100;

    &.router-link-exact-active {
      opacity: 1;
    }
  }
}
</style>
