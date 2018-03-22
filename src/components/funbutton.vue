<template>
  <router-link :to="{name: 'Fun'}">
    <div type = "button" class = "buttonfun">
      <div class = "funtext">
          <p>FUN</p>
      </div>
    </div>
  </router-link>
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
  background-color: deepskyblue; /* Green */
  border: solid;
  border-radius: 3px;
  border-width: 2px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 0px;
  cursor: pointer;
  box-shadow: -1px -1px #888888;
}

.funtext {
  margin: -5px 0px;
}
</style>
