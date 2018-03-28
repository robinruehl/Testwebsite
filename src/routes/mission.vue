<template>
  <div id = "mission">
  
    <div class = "headerapp">
      <headercmp/>
    </div>
    <div class = "maingrid">

      
      
      <div class = "center">
        <div class = "missiontext">
          <p class = "textheader">

          </p>
          <p align = left class = "textheader">
            My mission is simple. <br>
            Somehow restore the fun in Counterstrike Global-Offensive. <br>
            And that is what I then did. I thought up this idea of a database about fun things to do in Counterstrike Global Offensive. <br>
            <br>
            You will find information about 
          </p>
        </div>
      </div>
    </div>
    <div class = "footerapp">
      <footercmp/>
    </div>  
  </div>
</template>

<script>

import headercmp from "../components/headercmp";
import footercmp from "../components/footercmp";


export default {
  name: "Mission",
  components: {
    headercmp,
    footercmp
  },
};
</script>

<style scoped>

#mission {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 990px ;
}

.maingrid {
  display: grid;
  position: reletave;
  //box-shadow: 0px 0px 1px 2px #888888;
  max-width: 1580px;
  min-width: 1000px;
  grid-template-columns: 30px 1fr 1fr 1fr 1fr 10px 1fr 30px;
  grid-template-rows: 10px 200px 10px 200px 10px 200px 10px 200px 10px 10px;
  margin: auto;
}

.sidebar {
  position: relative;
  background-color: gainsboro;
  grid-column: 7 / 8;
  grid-row: 2 / 9;
  //border: 2px solid whitesmoke;
  max-width: 300px;
  min-width: 145px;
  margin: 0px;
  padding: 0px;
}

.center {
  background-color: gainsboro;
  grid-column: 2 / 8;
  grid-row: 2 / 11;
  border: 2px solid whitesmoke;
  overflow: hidden;
  position: relative;
  box-shadow: -1px -1px 1px 1px #888888;
  max-width: 1518px;
  min-width: 900px;
  max-height: 832px;
  margin: 1px 0px 0px 0px;
}

.missiontext{
  font-size: 20px;
  background-color: white;
  border: 2px solid whitesmoke;
  margin: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  min-height: 808px;
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
