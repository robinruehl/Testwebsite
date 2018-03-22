<template>
  <div id = "creator">
  creator
    <div class = "maingrid">

      <div class = "sidebar">

      </div>
      <div class = "center">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Creator",
  components: {
  }
};
</script>

<style>
#creator {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.maingrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 10px 220px;
  grid-template-rows: 10px 200px 10px 200px 10px 200px 10px 200px 10px 1fr 10px;
}

.sidebar {
  background-color: gainsboro;
  grid-column: 6 / 7;
  grid-row: 2 / 11;
  border: 2px solid whitesmoke;
}

.center {
  background-color: gainsboro;
  grid-column: 1 / 5;
  grid-row: 2 / 11;
  border: 2px solid whitesmoke;
}
</style>
