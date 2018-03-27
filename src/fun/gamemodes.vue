<template>
  <div id="fun">
    <div class = "headerapp">
      <headercmp/>
    </div>
    <div class = "maingrid">

      <div class = "center">
        <menucmp/>
        <div class = "funcenter">
          <funcentercmp/>
        </div>
      </div>
    </div>
    <div class = "footerapp">
      <footercmp/>
    </div> 
  </div>
</template>

<script>
import menucmp from "../components/menucmp";
import funcentercmp from "../components/funcentercmp";
import headercmp from "../components/headercmp";
import footercmp from "../components/footercmp";

export default {
  name: "Gamemodes",
  components: {
    menucmp,
    funcentercmp,
    headercmp,
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
  min-width: 1000px;
  grid-template-columns: 30px 1fr 1fr 1fr 1fr 10px 1fr 30px;
  grid-template-rows: 10px 200px 10px 200px 10px 200px 10px 200px 10px auto 10px;
  margin: auto;
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
  max-height: 836px;
  margin: 1px 0px 0px 0px;
  display: grid;
  grid-template-columns: 10px 150px 1fr 1fr 1fr 1fr;
  grid-template-rows: 10px 1fr 1fr 1fr 1fr 1fr;
}

.menu {
  grid-column: 2/3;
  grid-row: 2/5;
}

.funcenter {
  grid-column: 3/7;
  grid-row: 2/7;
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
