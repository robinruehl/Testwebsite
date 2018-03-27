<template>
  <div type = "button" class = "buttonde">
    <router-link :to="{name: 'DeHome'}" class = "cancerlink">
      <div class = "detext">
        <p>Deutsch</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "buttonde",
  data() {
    return {
      msg: "placeholder"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.buttonde {
  background-color: whitesmoke;
  border: 2px solid whitesmoke;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 0px;
  position: relative;
  margin: 12px 5px;
  width: 48px;
  height: 16px;
}

.buttonde:hover {
  background-color: gainsboro;
  border-radius: 3px;
  border: 2px solid whitesmoke;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 0px;
  position: relative;
  margin: 12px 5px;
  width: 48px;
  height: 16px;
}

.detext {
  margin: -4px 0px;
}

.cancerlink {
  text-decoration: none;
  color: white;
}
</style>
