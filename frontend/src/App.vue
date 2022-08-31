<template>
  <div id="app">
    <HeaderView />
    <router-view/> 
  </div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue";

export default {
  components: {
    HeaderView,
    
}
}

</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Romanesco&display=swap');


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
