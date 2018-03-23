dd<template>
  <div id="fun">
    fun
    <div class = "maingrid">

      <div class = "center">
        <menucmp/>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
//import menucmp from ".../components/menucmp";

export default {
  name: "Gamemodes",
  components: {
    //menucmp,
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

</style>
