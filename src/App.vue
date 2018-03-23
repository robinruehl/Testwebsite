<template>
  <div id="app">
    <headercmp/>
    <router-view/>
    <footercmp/>
  </div>
</template>

<script>
import headercmp from "./components/headercmp";
import footercmp from "./components/footercmp";




export default {
  name: "App",
  components: {
    headercmp,
    footercmp
  },
  methods: {
    
  },
};
</script>

<style>
#app {
  background: linear-gradient(gainsboro, white);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: auto;
  max-width: 1580px;
  min-width: 1020px;
  //border: solid;
  //color: whitesmoke;

}

</style>
