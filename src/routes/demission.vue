<template>
  <div id = "demission">

    <div class = "headerapp">
      <deheadercmp/>
    </div>
    <div class = "maingrid">
      
      
      <div class = "center">
        <div class = "missiontext">
          <p class = "textheader">
            Meine Mission?
          </p>
          <p align = left class = "textbody">
            Meine Mission ist einfach. <br>
            Irgendwie muss ich den Spaß zurrück in das Spiel Counterstrike Global Offensive bringen. <br>
            Und diese Seite ist dann auch mein Ansatz. 
            Ich hatte die Idee eine Datenbank über spaßige Sachen, die man in Counterstrike machen kann, zu erstellen. 
            <br>
            <br>
            Es geht ja schon seit längerer Zeit herrum, dass viele Spieler sagen, 
            sie müssen sich zwingen Counterstrike zu spielen, jedoch bleibt die Spielerzahl eher stabil. 
            <img src="https://cdn.jsdelivr.net/gh/robinruehl/CSGOFUNBASE@1c50181eba86aa4f1888f2bd9747e0d2519467a6/src/assets/9b500aac3d0f5c892357e625a3ca6865.png" alt="" width = "600px"> <br>
            <br>


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
  }
};
</script>

<style scoped>
#demission {
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
  //min-width: 1000px;
  grid-template-columns: 30px 1fr 1fr 1fr 1fr 10px 1fr 30px;
  //grid-template-rows: 10px 200px 10px 200px 10px 200px 10px 200px 10px 10px;
  margin: auto;
  margin-top: 10px;
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
  //min-width: 900px;
  //max-height: 832px;
  margin: 1px 0px 0px 0px;
}

.missiontext {
  background-color: white;
  border: 2px solid whitesmoke;
  margin: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  //min-height: 808px;
}

.textheader {
  margin: 20px;
  font-size: 30px;
}

.textbody {
  margin: 20px;
  font-size: 20px;
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
  margin: 10px 30px 0px 30px;
}
</style>
