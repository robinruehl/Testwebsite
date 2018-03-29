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
              Surf
            </p>
          </div>
          <div class = "textbody">
            <p align = left>
              Der Spielmodus Surf ist schon seit den zeiten der ersten Iteration Counterstrikes ein liebling der Community. Er besteht aus einem Bug der Source Engine, welcher einem erlaubt an einer Wand entlang zu gleiten und dabei Geschwindigkeit aufzubauen.
              <br>
              In der Source Engine rutscht man eine Wand runter, wenn sie einen höheren Steigungswinkel als 45° hat, wenn man aber dann in Richtung dieser Wand läuft bleibt man an ihr hängen und rutscht nicht runter. Um sich zu beschleunigen kann man den Richtungswinkel mit dem man an die Wand guckt leicht ändern. Dabei gleicht man nicht mehr ganz den Sog der Schwerkraft aus und gleitet die Wand etwas runter und beschleunigt sich in die Entgegengesetzte Richtung - man kann also die Richtung in die man sich bewegt kontrollieren. 
              <br>
              Um seine Bewegung in der Luft zu kontrollieren muss man “Airstrafing” beherrschen. 
              Wenn ein Bewegungsinput an den Server geschickt wird, beschleunigt der Server den Spieler etwas in diese Richtung. Springt der Spieler dann und geht dabei nach Links, so bewegt er sich minimal in diese Richtung, auch wenn er nicht auf dem Boden ist. Jetzt, wenn er nach links läuft und auch noch sich langsam nach links dreht, verwandelt er ein bisschen dieser linksbewegung in Vorwärtsbewegung, aber wichtiger ändert die Richtung in der er sich bewegt. Der Spieler kann sich also auch in der Luft kontrollieren.
              <br>
              Verbindet er jetzt die Eigenschaft der Wand mit dem Airstrafing und einem spezialisierten Parkour entsteht der Spielmodus “Surf”.
              <br>
              Ich selber glaube, dass er gerade so beliebt ist, weil er sehr komplex ist und schwer zu meistern. Es gibt Spieler, die tausende Stunden ihres Lebens in diesen Spielmodus investieren und immer noch besser werden können. Außerdem werden täglich neue Maps für diesen Spielmodus veröffentlicht, welches zu endlosen Stunden von Spaß führt.
              <br>
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
  name: "DeGamemodessurf",
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
  //box-shadow: 0px 0px 1px 2px #888888;
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
