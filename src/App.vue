<template>
  <v-app id="app">
    <div>
      <v-toolbar dense>
        <v-tabs id="menuLinks" color="blue darken-4">
          <v-tab>
            <router-link to="/">Play</router-link>
          </v-tab>
          <v-tab>
            <router-link to="/artist/">Artist</router-link>
          </v-tab>
        </v-tabs>
      </v-toolbar>
    </div>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
 

export default {
  name:'App',
  data:{
    
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}

#menuLinks {
  a {
    font-weight: bold;
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: white;
    }
  }
}

</style>