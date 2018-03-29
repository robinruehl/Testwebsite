<template>
  <div type = "button" class = "buttonmission">
    <router-link :to="{name: 'Mission'}" class = "cancerlink"> 
      <div class = "missiontext">
        <p class = "text1">My </p>
        <p class = "text2">Mission</p>
      </div>
    </router-link>
  </div>
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

.buttonmission:hover {
  background-color: gainsboro;
  border: 2px solid whitesmoke;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
  width: 130px;
  height: 30px;
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
