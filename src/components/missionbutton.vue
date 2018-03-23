<template>
  <router-link :to="{name: 'Mission'}"> 
    <div type = "button" class = "buttonmission">
      <div class = "missiontext">
        <p class = "text1">My </p>
        <p class = "text2">Mission</p>
      </div>
    </div>
  </router-link>
</template>

<script>

export default {
  name: "buttonmission",
  data() {
    return {
      msg: "placeholder"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.buttonmission {
    background-color: deepskyblue;
    border-radius: 3px;
    border: 2px solid gainsboro;
    color: white;
    text-align: left;
    text-decoration: none;  
    display: inline-block;
    font-size: 25px;
    text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
    line-height: 0px;
    cursor: pointer;
    box-shadow: -2px -2px 3px #888888;
    width: 115px;
}


.text1 {
   margin: 20px -15px;
}

.text2 {
  margin: -20px 23px;
}
</style>