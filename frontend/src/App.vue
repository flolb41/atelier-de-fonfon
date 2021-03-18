<template>
  <div id="app">
    <div class="header">
    <h1 class="titre">L'Atelier de Fonfon</h1>
  </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/tableaux">Tableaux</router-link> |
      <router-link to="/sculptures">Sculptures</router-link> |
      <router-link to="/lampes">Lampes</router-link> |
      <router-link to="/creation">Créations</router-link> |
      <router-link to="/bijoux">Bijoux</router-link>
    </div>
    <router-view/>   
  </div>
</template>
<script>
export default {
  components : {},
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  color: orangered;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 1.5em;

    &.router-link-exact-active {
      color: #1b8f5b;
    }
  }
}
.header {
  width: 80%;
  margin: 0 auto;
}
.titre {
  margin: 2% auto 0 auto;
    font-family: Tangerine;
    font-size: 5rem;
    text-decoration: underline;
}
@media screen and (max-width: 550px) {
   .titre {
        font-size: 3rem;
  }
  nav {
  padding: 15px;
  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 0.5em;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
}
</style>
