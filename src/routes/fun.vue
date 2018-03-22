<template>
  <div id="fun">
    fun
    <div class = "maingrid">

      <div class = "center">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Fun",
  components: {
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
  grid-template-columns: 1fr 1fr 1fr 1fr 10px 220px;
  grid-template-rows: 10px 200px 10px 200px 10px 200px 10px 200px 10px 1fr 10px;
}

.center {
  background-color: gainsboro;
  grid-column: 1 / 7;
  grid-row: 2 / 11;
  border: 2px solid whitesmoke;
}


</style>
