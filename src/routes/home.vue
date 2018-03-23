<template>
  <div id = "home">
  home
    <div class = "maingrid">

      <div class = "sidebar">
        <sidebarcmp/>
      </div>
      <div class = "center">
        <slidercmp/>
      </div>
    </div>
  </div>
</template>

<script>
import slidercmp from "../components/slidercmp";
import sidebarcmp from "../components/sidebarcmp";

export default {
  name: "Home",
  components: {
    slidercmp,
    sidebarcmp
  },
};
</script>

<style scoped>

#home {
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
}

.sidebar {
  position: relative;
  background-color: gainsboro;
  grid-column: 7 / 8;
  grid-row: 2 / 11;
  border: 2px solid whitesmoke;
  max-width: 300px;
  min-width: 145px;
  margin: 0 0 0 0;
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
  max-height: 836px;
  margin: 1px 0px 0px 0px;
}
</style>
