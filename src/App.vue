<template>
  <div id="app">
    <!-- // ruta
this.$router.push('home')
// objeto
this.$router.push({ path: 'home' })
// nombre y objeto como parámetro
this.$router.push({ name: 'user', params: { userId: '123' } }) -->
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

