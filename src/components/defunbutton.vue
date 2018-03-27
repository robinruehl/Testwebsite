<template>
  <div type = "button" class = "debuttonfun">
    <router-link :to="{name: 'DeFun'}" class = "cancerlink">
      <div class = "funtext">
          <p>FUN</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "debuttonfun",
  data() {
    return {
      msg: "placeholder"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.debuttonfun {
  background-color: whitesmoke;
  border: 2px solid whitesmoke;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 0;
  //cursor: pointer;
  width: 60px;
  height: 30px;

  margin: 10px;

  position: relative;

  top: -10px;
}

.debuttonfun:hover {
  background-color: gainsboro;
  border-radius: 3px;
  border: 2px solid whitesmoke;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
  width: 60px;
  height: 30px;

  margin: 10px;

  position: relative;

  top: -10px;


  //cursor: pointer;
}

.funtext {
  margin: -10px 0px;
}

.cancerlink {
  text-decoration: none;
  color: white;
}
</style>
