<template>
  <div id="footercmp">
    <p class = "funbase">CSGO-funbase</p>
    <p class = "database"></p>
    <p class = "database"></p>
  </div>
</template>

<script>
export default {
  name: "footercmp",
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
#footercmp {
  border-radius: 0 0 10px 10px;
  background-color: gainsboro;
  margin: auto;
  display: flex;
  border: solid;
  color: whitesmoke;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-width: 2px;
  border-bottum-width: 0px;
  box-shadow: 0px 1px 1px 2px #888888;
  max-width: 1520px;
  //min-width: 934px;
  min-height: 70px;
}

.funbase {
  margin: auto;
  margin-left: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-size: 20px;
  color: white;
}

.database {
  margin: auto;
  margin-left: 10px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-size: 20px;
  color: white;
}
</style>
