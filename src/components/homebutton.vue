<template>
  <router-link :to="{name: 'Home'}">
    <div type = "button" class = "buttonhome">
      <div class = "hometext">
        <p>CSGO</p>
        <p class = "p1">funbase</p>
      </div>
    </div>
  </router-link>
</template>

<script>

export default {
  name: "buttonhome",
  data() {
    return {
      msg: "placeholder"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.buttonhome {
    border-radius: 3px;
    background-color: deepskyblue; /* Green */
    border: solid;
    border-width: 2px;
    color: white;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 9px;
    padding-bottom: 9px;
    text-align: center;
    text-decoration: none;  
    display: inline-block;
    font-size: 25px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    line-height: 0px;
    margin: 0px 0px;
    cursor: pointer;
    box-shadow: -1px -1px #888888
}

.hometext {
  margin: -20px 0px;
}

.p1 {
  font-size: 21px
}
</style>