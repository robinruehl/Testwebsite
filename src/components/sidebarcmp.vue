<template>
  <div id = "sidebar">
    <div class = "element element1">
      <router-link :to="{name: 'Test1'}">
        <img src="https://rawgit.com/robinruehl/CSGOFUNBASE/9f15c4a2faced31cf48c7b681dfb3f9a3a330fdf/src/assets/test4001.jpg" style= "margin: 5px 25px 5px 0px; max-width: 60px;">
      </router-link>
      <p class = "titel"> Test Page </p>
      <p class = "description"> Brings you to the test page.</p>
    </div>
    <div class = "element element2">
      <router-link :to="{name: 'Test1'}">
        <img src="https://rawgit.com/robinruehl/CSGOFUNBASE/9f15c4a2faced31cf48c7b681dfb3f9a3a330fdf/src/assets/test4002.jpg" style= "margin: 5px 25px 5px 0px; max-width: 60px;">
      </router-link>
      <p class = "titel"> Test Page </p>
      <p class = "description"> Brings you to the test page.</p>
    </div>
    <div class = "element element3">
      <router-link :to="{name: 'Test1'}">
        <img src="https://rawgit.com/robinruehl/CSGOFUNBASE/9f15c4a2faced31cf48c7b681dfb3f9a3a330fdf/src/assets/test4003.jpg" style= "margin: 5px 25px 5px 0px; max-width: 60px;">
      </router-link>
      <p class = "titel"> Test Page </p>
      <p class = "description"> Brings you to the test page.</p>
    </div>
    <div class = "element element4">
      <router-link :to="{name: 'Test1'}">
        <img src="https://rawgit.com/robinruehl/CSGOFUNBASE/9f15c4a2faced31cf48c7b681dfb3f9a3a330fdf/src/assets/test4001.jpg" style= "margin: 5px 25px 5px 0px; max-width: 60px;">
      </router-link>
      <p class = "titel"> Test Page </p>
      <p class = "description"> Brings you to the test page.</p>
    </div>
    <div class = "element element5">
      <router-link :to="{name: 'Test1'}">
        <img src="https://rawgit.com/robinruehl/CSGOFUNBASE/9f15c4a2faced31cf48c7b681dfb3f9a3a330fdf/src/assets/test4002.jpg" style= "margin: 5px 25px 5px 0px; max-width: 60px;">
      </router-link>
      <p class = "titel"> Test Page </p>
      <p class = "description"> Brings you to the test page.</p>
    </div>
    <div class = "element element6">
      <router-link :to="{name: 'Test1'}">
        <img src="https://rawgit.com/robinruehl/CSGOFUNBASE/9f15c4a2faced31cf48c7b681dfb3f9a3a330fdf/src/assets/test4003.jpg" style= "margin: 5px 25px 5px 0px; max-width: 60px;">
      </router-link>
      <p class = "titel"> Test Page </p>
      <p class = "description"> Brings you to the test page.</p>
    </div>
  </div>
</template>

<script>



export default {
  name: "sidebarcmp",
  data() {
    return {
      msg: "placeholder"
    };
  },
  components: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

#sidebar {
  border-radius: 0px 0px 0px 0px;
  background-color: gainsboro;
  padding: 13px 0px;
  max-height: ;
  display: grid;
  grid-template-columns: ;
  grid-template-rows: ;
  border: 2px whitesmoke solid;
  margin: auto;
  //padding: auto;
  box-shadow: 1px -1px 1px 1px #888888
}

.titel {
  color: black;
  grid-column: 2/4;
  grid-row: 1/2;
  text-align: left;
  font-size: 30px;
  //padding: 10px -17px;
  margin: 7px 0 0 -24px;
  line-height: 25px;
}

.description {
  margin: 10px 0 0 -92px;
  font-size: 15px;
  color: black;
  grid-column: 2/4;
  grid-row: 2/3;
  text-align: left;
  //padding: 5px;
}

.element{
  min-height: 60px;
  max-height: 150px;
  min-width: 100px;
  //max-width: 250px;
  margin: 5px 10px;
  background-color: white;
  border: 2px solid whitesmoke;
  //padding: 10px 130px 10px 0px;
  display: grid;
  grid-template-columns: 100px 50px 1fr;
  grid-template-rows: 60px 60px;
}

</style>