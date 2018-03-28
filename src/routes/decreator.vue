<template>
  <div id = "decreator">
    <div class = "headerapp">
      <deheadercmp/>
    </div>
    <div class = "maingrid">
      
      <div class = "sidebar">
        <csidebarcmp/>
      </div>
      <div class = "center">
        <div class = "aboutme">
          <p class = "textheader">
            The Creator <br>

          </p>
          <p class = "textbody">
            Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna 
            aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo 
            dolores et ea rebum. Stet clita kasd 
            gubergren, no sea takimata sanctus 
            est Lorem ipsum dolor sit amet. Lorem 
            ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy 
            eirmod tempor invidunt ut labore et 
            dolore magna aliquyam erat, sed diam 
            voluptua. At vero eos et accusam et 
            justo duo dolores et ea rebum. Stet 
            clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum 
            dolor sit amet.
            Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna 
            aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo 
            dolores et ea rebum. Stet clita kasd 
            gubergren, no sea takimata sanctus 
            est Lorem ipsum dolor sit amet. Lorem 
            ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy 
            eirmod tempor invidunt ut labore et 
            dolore magna aliquyam erat, sed diam 
            voluptua. At vero eos et accusam et 
            justo duo dolores et ea rebum. Stet 
            clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum 
            dolor sit amet.
            Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna 
            aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo 
            dolores et ea rebum. Stet clita kasd 
            gubergren, no sea takimata sanctus 
            est Lorem ipsum dolor sit amet. Lorem 
            ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy 
            eirmod tempor invidunt ut labore et 
            dolore magna aliquyam erat, sed diam 
            voluptua. At vero eos et accusam et 
            justo duo dolores et ea rebum. Stet 
            clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum 
            dolor sit amet.

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
import csidebarcmp from "../components/csidebarcmp";
import deheadercmp from "../components/deheadercmp";
import footercmp from "../components/footercmp";

export default {
  name: "DeCreator",
  components: {
    csidebarcmp,
    deheadercmp,
    footercmp
  }
};
</script>

<style scoped>
#decreator {
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
  //min-width: 600px;
  grid-template-columns: 30px 1fr 1fr 1fr 1fr 10px 1fr 30px;
  grid-template-rows: 10px 200px 10px 200px 10px 200px 10px 200px 10px auto 10px;
  margin: auto;
}

.sidebar {
  position: relative;
  background-color: gainsboro;
  grid-column: 7 / 8;
  grid-row: 2 / 9;
  //border: 2px solid whitesmoke;
  max-width: 300px;
  min-width: 200px;
  margin: 0px;
  padding: 0px;
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
  //min-width: 580px;
  //max-height: 832px;
  margin: 1px 0px 0px 0px;
}

.aboutme {
  background-color: white;
  border: 2px solid whitesmoke;
  margin: 10px;
  font-size: 23px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  //min-height: 808px;
}

.textheader {
  font-size: 30px;
  margin: 20px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.textbody {
  font-size: 20px;
  margin: 20px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;

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
