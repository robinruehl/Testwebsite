<template>
  <div id = "mbar">
    <div class = "melement melement1">
      <router-link :to="{name: 'Test1'}">
        <img src="https://cdn.jsdelivr.net/gh/robinruehl/CSGOFUNBASE@9f15c4a2faced31cf48c7b681dfb3f9a3a330fdf/src/assets/test4001.jpg" style= "margin: 0px 5px 5px 0px; max-width: 60px;">
      </router-link>
      <p class = "titel"> Test Page </p>
      <p class = "description"> Brings you to the test page.</p>
    </div>
    <div class = "melement melement2">
      <router-link :to="{name: 'Test1'}">
        <img src="https://cdn.jsdelivr.net/gh/robinruehl/CSGOFUNBASE@9f15c4a2faced31cf48c7b681dfb3f9a3a330fdf/src/assets/test4002.jpg" style= "margin: 0px 5px 5px 0px; max-width: 60px;">
      </router-link>
      <p class = "titel"> Test Page </p>
      <p class = "description"> Brings you to the test page.</p>
    </div>
    <div class = "melement melement3">
      <router-link :to="{name: 'Test1'}">
        <img src="https://cdn.jsdelivr.net/gh/robinruehl/CSGOFUNBASE@9f15c4a2faced31cf48c7b681dfb3f9a3a330fdf/src/assets/test4003.jpg" style= "margin: 0px 5px 5px 0px; max-width: 60px;">
      </router-link>
      <p class = "titel"> Test Page </p>
      <p class = "description"> Brings you to the test page.</p>
    </div>
    <div class = "melement melement4">
      <router-link :to="{name: 'Test1'}">
        <img src="https://cdn.jsdelivr.net/gh/robinruehl/CSGOFUNBASE@9f15c4a2faced31cf48c7b681dfb3f9a3a330fdf/src/assets/test4001.jpg" style= "margin: 0px 5px 5px 0px; max-width: 60px;">
      </router-link>
      <p class = "titel"> Test Page </p>
      <p class = "description"> Brings you to the test page.</p>
    </div>
    <div class = "melement melement5">
      <router-link :to="{name: 'Test1'}">
        <img src="https://cdn.jsdelivr.net/gh/robinruehl/CSGOFUNBASE@9f15c4a2faced31cf48c7b681dfb3f9a3a330fdf/src/assets/test4002.jpg" style= "margin: 0px 5px 5px 0px; max-width: 60px;">
      </router-link>
      <p class = "titel"> Test Page </p>
      <p class = "description"> Brings you to the test page.</p>
    </div>
    <div class = "melement melement6">
      <router-link :to="{name: 'Test1'}">
        <img src="https://cdn.jsdelivr.net/gh/robinruehl/CSGOFUNBASE@9f15c4a2faced31cf48c7b681dfb3f9a3a330fdf/src/assets/test4003.jpg" style= "margin: 0px 5px 5px 0px; max-width: 60px;">
      </router-link>
      <p class = "titel"> Test Page </p>
      <p class = "description"> Brings you to the test page.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mbarcmp",
  data() {
    return {
      msg: "placeholder"
    };
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#mbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 0px 0px 0px 0px;
  background-color: gainsboro;
  border: 2px whitesmoke solid;
  margin: 10px;
  box-shadow: 0px 0px 1px 2px #888888;
}

.melement {
  min-height: 60px;
  max-height: 150px;
  min-width: 100px;
  max-width: 160px;

  margin: auto;
  margin-top: 4%;
  background-color: white;
  border: 2px solid whitesmoke;
  display: grid;
  grid-template-columns: 60px 50px 1fr;
  grid-template-rows: 50px 60px;
}

.titel {
  color: black;
  grid-column: 2/4;
  grid-row: 1/2;
  text-align: left;
  font-size: 20px;
  margin: 7px 0 0 3px;
  line-height: 25px;
  font-weight: 600;
}

.description {
  margin: 15px 2px 0 2px;
  font-size: 15px;
  color: black;
  font-size: 15px;
  grid-column: 1/4;
  grid-row: 2/3;
  text-align: left;
  font-weight: 400;
}

</style>