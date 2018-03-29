<template>
  <div id="fun">
    <div class = "headerapp">
      <deheadercmp/>
    </div>
    <div class = "maingrid">
      <div class = "center">
      <demenucmp/>
        <div class = "textgrid">
          <div class = "textheader">
            <p class = "Header1">
              Jailbreak
            </p>
          </div>
          <div class = "textbody">
            <p align = left>
              Der Name beschreibt diesen Spielmodus eigentlich schon ganz gut, aber das Ausbrechen aus dem Gefängnis ist nicht alles. 
              Es gibt zwei teams, die Insassen und die Wachen. Meistens fangen die Insassen in ihren Zellen, oft nur mit einem Messer, an. Die Wachen aber starten mit reichlich Feuerkraft in einem Waffenkammer. Sie können ihre Ausrüstung auswählen und dann die Insassen raus lassen. Meistens werden die Insassen von den Wachen gezwungen gegenseitig in kleinen minispielen um ihr leben kämpfen.
              Alleine wäre das langweilig und deswegen müssen die Insassen das nicht machen. SIe können versuchen durch Ventilationsschachte zu entkommen, aber falls sie gefunden werden müssen sie sich verteidigen können.Sie müssen also auch an eine Waffe kommen. 

            </p>
          </div>  
        </div>
      </div>
    </div>
    <div class = "footerapp">
      <footercmp/>
    </div> 
  </div>
</template>

<script>
import demenucmp from "../components/demenucmp";
import defuncentercmp from "../components/defuncentercmp";
import deheadercmp from "../components/deheadercmp";
import footercmp from "../components/footercmp";

export default {
  name: "DeGamemodesjail",
  components: {
    demenucmp,
    defuncentercmp,
    deheadercmp,
    footercmp
  }
};
</script>

<style scoped>
#fun {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.maingrid {
  display: grid;
  position: reletave;
  max-width: 1580px;
  //min-width: 1000px;
  grid-template-columns: 30px 1fr 1fr 1fr 1fr 10px 1fr 30px;
  //grid-template-rows: 10px 200px 10px 200px 10px 200px 10px 200px 10px 10px;
  margin: auto;
  margin-top: 10px;
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
  //min-width: 900px;
  //max-height: 836px;
  margin: 1px 0px 0px 0px;
  display: grid;
  grid-template-columns: 10px 150px 1fr 1fr 1fr 1fr;
  //grid-template-rows: 10px 1fr 1fr 1fr 1fr 1fr;
}

.demenu {
  grid-column: 2/3;
  grid-row: 2/5;
}

.textgrid {
  position: relative;
  grid-column: 3/7;
  grid-row: 2/7;
  display: grid;
  margin: 10px;
  grid-template-column: 20% 20% 20% 20%;
  //grid-template-rows: 15% 10px 1fr 1fr 1fr 1fr;
  border: 2px solid gainsboro;
  box-shadow: -1px -1px 1px 1px #888888;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  background-color: whitesmoke;
}

.textheader {
  grid-column: 1/5;
  grid-row: 1/2;
  margin: 10px;
}

.textbody {
  grid-column: 1/4;
  grid-row: 3/6;
  margin: 10px;
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
  margin: 10px 30px 0px 30px;
}
</style>
