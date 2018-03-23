<template>
  <div id="app">
    <div class = "headerapp">
      <headercmp/>
    </div>
    <router-view class = "router"/>
    <div class = "footerapp">
      <footercmp/>
    </div>  
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
  margin: 0px -10px 0px -10px;
  //border: solid;
  //color: whitesmoke;

}

.headerapp {
  background-color: white;
  border: solid;
  color: whitesmoke;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 4px;
  border-bottum-width: 0px;
}

.footerapp {
  margin: 0px 30px 0px 30px;
}

</style>
