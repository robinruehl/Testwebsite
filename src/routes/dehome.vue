<template>
  <div id = "dehome">
    <div class = "headerapp">
      <deheadercmp/>
    </div>
    <div class = "maingrid">
      
      <div class = "sidebar">
        <sidebarcmp/>
      </div>
      <div class = "center">
        <slidercmp/>
      </div>
    </div>
    <div class = "footerapp">
      <footercmp/>
    </div>  
  </div>
</template>

<script>
import slidercmp from "../components/slidercmp";
import sidebarcmp from "../components/sidebarcmp";
import deheadercmp from "../components/deheadercmp";
import footercmp from "../components/footercmp";

export default {
  name: "DeHome",
  components: {
    slidercmp,
    sidebarcmp,
    deheadercmp,
    footercmp
  },
};
</script>

<style scoped>

#dehome {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //min-width: 990px ;
}

.maingrid {
  display: grid;
  position: reletave;
  //box-shadow: 0px 0px 1px 2px #888888;
  max-width: 1580px;

  grid-template-columns: 30px 1fr 1fr 1fr 1fr 10px 1fr 30px;
  grid-template-rows: 10px 200px 10px 200px 10px 200px 10px 200px 10px auto 10px;
  margin: auto;
}

.center {
  background-color: gainsboro;
  grid-column: 2 / 6;
  grid-row: 2 / 11;
  border: 2px solid whitesmoke;
  overflow: hidden;
  position: relative;
  box-shadow: -1px -1px 1px 1px #888888;
  max-width: 1350px;
  min-width: 410px;
  max-height: 832px;
  margin: 1px 0px 0px 0px;
}

/*.hometitle {
  font-size: 45px;
  font-weight: 500;
  margin: 0;
}*/

.sidebar {
  position: relative;
  background-color: gainsboro;
  grid-column: 7 / 8;
  grid-row: 2 / 9;
  //border: 2px solid whitesmoke;
  max-width: 300px;
  min-width: 185px;
  margin: 1px 0px;
  padding: 0px;
}

.deheaderapp {
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
