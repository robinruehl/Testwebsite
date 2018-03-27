<template>
  <div id = "demission">

    <div class = "headerapp">
      <deheadercmp/>
    </div>
    <div class = "maingrid">
      
      
      <div class = "center">
        <div class = "missiontext">
          <p class = "textheader">

          </p>
          <p align = left class = "textheader">
            Meine Mission ist einfach. <br>
            Irgendwie muss ich den Spaß zurrück in das Spiel Counterstrike Global Offensive bringen. <br>
            Und das ist, was ich dann auch hiermit machen werde. Ich hatte die Idee eine Datenbank über spaßige Sachen in Counterstrike zu erstellen. <br>
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

import deheadercmp from "../components/deheadercmp";
import footercmp from "../components/footercmp";

export default {
  name: "DeMission",
  components: {
    deheadercmp,
    footercmp
  },
};
</script>

<style scoped>

#demission {
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

/*.sidebar {
  position: relative;
  background-color: gainsboro;
  grid-column: 7 / 8;
  grid-row: 2 / 11;
  border: 2px solid whitesmoke;
  max-width: 300px;
  min-width: 145px;
  margin: 0 0 0 0;
}*/

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
