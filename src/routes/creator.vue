<template>
  <div id = "creator">
    <div class = "maingrid">

      <div class = "sidebar">
        <csidebarcmp/>
      </div>
      <div class = "center">

      </div>
    </div>
  </div>
</template>

<script>

import csidebarcmp from "../components/csidebarcmp";

export default {
  name: "Creator",
  components: {
    csidebarcmp
  }
};
</script>

<style scoped>

#creator {
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
  min-width: 145px;
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
  min-width: 740px;
  max-height: 832px;
  margin: 1px 0px 0px 0px;
}
</style>
