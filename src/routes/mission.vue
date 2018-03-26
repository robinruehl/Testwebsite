<template>
  <div id = "mission">
  mission
    <div class = "maingrid">

      
      <div class = "center">
        <div class = "missiontext">
          <p align = left>
            There be Dragons. <br>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et 
            dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. 
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna aliquyam erat, sed diam 
            voluptua. At vero eos et accusam et justo duo dolores et 
            ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Mission",
  components: {
  }
};
</script>

<style scoped>

#mission {
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
  grid-template-rows: 10px 200px 10px 200px 10px 200px 10px 200px 10px 10px;
  margin: auto;
}

/*.sidebar {
  position: relative;
  background-color: gainsboro;
  grid-column: 7 / 8;
  grid-row: 2 / 11;
  border: 2px solid whitesmoke;
  max-width: 300px;
  min-width: 145px;
  margin: 0 0 0 0;
}*/

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
  max-height: 832px;
  margin: 1px 0px 0px 0px;
}

.missiontext{
  font-size: 20px;
  margin: 10px;
}
</style>
