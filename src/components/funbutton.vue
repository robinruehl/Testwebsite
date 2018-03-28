<template>
  <div type = "button" class = "buttonfun">
    <router-link :to="{name: 'Fun'}" class = "cancerlink">
      <div class = "funtext">
          <p>FUN</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "buttonfun",
  data() {
    return {
      msg: "placeholder"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttonfun {
  background-color: gainsboro;
  border: 2px solid whitesmoke;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 0;

  width: 60px;
  height: 30px;
  margin: 15px 5px;
  position: relative;
}

.buttonfun:hover {
  background-color: whitesmoke;
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
  margin: 15px 5px;
  position: relative;
}

.funtext {
  margin: -10px 0px;
}

.cancerlink {
  text-decoration: none;
  color: white;
}
</style>
