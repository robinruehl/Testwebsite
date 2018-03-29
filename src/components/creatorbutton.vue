<template>
  <div type = "button" class = "buttoncreator">
    <router-link :to="{name: 'Creator'}" class = "cancerlink">
      <div class = "creatortext">
        <p class = "text1">The</p>
        <p class = "text2">Creator</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "buttoncreator",
  data() {
    return {
      msg: "placeholder"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttoncreator {
  background-color: lightgray;
  border: 2px solid whitesmoke;
  color: white;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 0px;
  width: 140px;
  height: 30px;
  margin: 15px 5px;
  position: relative;
}

.buttoncreator:hover {
  background-color: gainsboro;
  border: 2px solid whitesmoke;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
}

.creatortext {
  text-align: left;
}

.text1 {
  margin: 15px 2px;
}

.text2 {
  margin: -15px 50px;
}

.cancerlink {
  text-decoration: none;
  color: white;
}
</style>
