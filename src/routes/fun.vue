dd<template>
  <div id="fun">
    
    <div class = "maingrid">

      <div class = "center">
        <menucmp/>
      </div>
    </div>
  </div>
</template>

<script>
import menucmp from "../components/menucmp";

export default {
  name: "Fun",
  components: {
    menucmp,
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
  min-width: 1000px;
  max-height: 836px;
  margin: 1px 0px 0px 0px;
  display: grid;
  grid-template-columns: 10px 150px 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
}

.menu {
  grid-column: 2/3;
  grid-row: 1/3;
}

/*.p121 {
  grid-column: 3/4;
  grid-row: 2/3;
}

.p122 {
  grid-column: 4/5;
  grid-row: 2/3;
}

.p123 {
  grid-column: 5/6;
  grid-row: 2/3;
}

.p124 {
  grid-column: 6/7;
  grid-row: 2/3;
}*/

</style>
