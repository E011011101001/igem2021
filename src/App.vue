<template lang="pug">
  v-app
    SiteHeader
    v-main
      v-container
        router-view
    SiteFooter
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

@Component({
  components: {
    SiteHeader,
    SiteFooter
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
