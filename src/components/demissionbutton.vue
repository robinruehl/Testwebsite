<template>
  <div type = "button" class = "debuttonmission">
    <router-link :to="{name: 'DeMission'}" class = "cancerlink"> 
      <div class = "missiontext">
        <p class = "text1">My </p>
        <p class = "text2">Mission</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "debuttonmission",
  data() {
    return {
      msg: "placeholder"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.debuttonmission {
  background-color: lightgray;
  border: 2px solid whitesmoke;
  color: white;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 0px;
  width: 130px;
  height: 30px;
  margin: 15px 5px;
  position: relative;
}

.debuttonmission:hover {
  background-color: gainsboro;
  border: 2px solid whitesmoke;
  font-size: 25px;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
  width: 130px;
  height: 30px;
  margin: 15px 5px;
}

.text1 {
  margin: 15px 3px;
}

.text2 {
  margin: -15px 40px;
}

.cancerlink {
  text-decoration: none;
  color: white;
}
</style>
