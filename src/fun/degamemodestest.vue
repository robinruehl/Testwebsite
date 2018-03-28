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
              This is a Test
            </p>
            <p class = "Header2">
              This test has no meaning
            </p>
          </div>
          <div class = "textbody">
            <p align = left>
            This would be the body. <br> Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, sed diam nonumy eirmod 
            tempor invidunt ut labore et dolore magna aliquyam erat, 
            sed diam voluptua. At vero eos et accusam et justo duo 
            dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet. 
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et 
            dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata           
            sanctus est Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
             sed diam nonumy eirmod tempor invidunt ut labore et 
             dolore magna aliquyam erat, sed diam voluptua. At vero 
             eos et accusam et justo duo dolores et ea rebum. <br>
             Stet clita kasd gubergren, no sea takimata sanctus 
             est Lorem ipsum dolor sit amet. Lorem ipsum dolor 
             sit amet, consetetur sadipscing elitr, sed diam nonumy 
             eirmod tempor invidunt ut labore et dolore magna aliquyam 
             erat, sed diam voluptua. At vero eos et accusam et justo duo 
             dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
             sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit 
             amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
             invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
             At vero eos et accusam et justo duo dolores et ea rebum. 
             Stet clita kasd gubergren, no sea takimata sanctus est 
             Lorem ipsum dolor sit amet. <br>
             Duis autem vel eum iriure dolor in 
             hendrerit in vulputate velit esse molestie consequat, 
             vel illum dolore eu feugiat nulla facilisis at vero 
             eros et accumsan et iusto odio dignissim qui blandit 
             praesent luptatum zzril delenit augue duis dolore te 
             feugait nulla facilisi. Lorem ipsum dolor sit amet,
            </p>
          </div>  
          <img class = "img1" src="https://rawgit.com/robinruehl/CSGOFUNBASE/9f15c4a2faced31cf48c7b681dfb3f9a3a330fdf/src/assets/test4001.jpg" style ="max-width:200px;"/>
          <p class = "imgdesc">
            This is a blue test image.
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
import demenucmp from "../components/demenucmp";
import defuncentercmp from "../components/defuncentercmp";
import deheadercmp from "../components/deheadercmp";
import footercmp from "../components/footercmp";

export default {
  name: "DeGamemodestest",
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
  min-width: 600px;
  grid-template-columns: 30px 1fr 1fr 1fr 1fr 10px 1fr 30px;
  grid-template-rows: auto;
  margin: auto;
  margin-top: 10px;
  //margin-bottum: 10px;
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
  min-width: 580px;
  //max-height: 836px;
  margin: 1px 0px 10px 0px;
  display: grid;
  grid-template-columns: 10px 150px 1fr 1fr 1fr 1fr;
  grid-template-rows: 10px 1fr 1fr 1fr 1fr 1fr;
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

.Header1 {
  font-size: 50px;
  margin: 0px;
}

.Header2 {
  font-size: 28px;
  margin: 0px;
}

.textbody {
  grid-column: 1/4;
  grid-row: 3/6;
  margin: 10px;
}

.img1 {
  grid-column: 4/5;
  grid-row: 3/4;
  margin: 30px 10px 0px 0px;
}

.imgdesc {
  grid-column: 4/5;
  grid-row: 4/5;
  margin: 10px 10px 0px 0px;
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
