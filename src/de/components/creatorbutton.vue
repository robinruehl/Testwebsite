<template>
  <router-link :to="{name: 'Creator'}">
    <div type = "button" class = "buttoncreator">
      <div class = "creatortext">
        <p class = "text1">The</p>
        <p class = "text2">Creator</p>
      </div>
    </div>
  </router-link>
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
  background-color: whitesmoke;
  border-radius: 3px;
  border: 2px solid gainsboro;
  color: white;
  text-decoration: none;  
  display: inline-block;
  font-size: 25px;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 0px;
  //cursor: pointer;
  padding-left: 23px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 40px;
  width: 130px;
}

.buttoncreator:hover {
  background-color: gainsboro;
  border-radius: 3px;
  border: 2px solid whitesmoke;
  color: white;
  text-decoration: none;  
  display: inline-block;
  font-size: 25px;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 0px;
  //cursor: pointer;
  padding-left: 23px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 40px;
  width: 130px;
}

.creatortext {
  text-align: left;
}

.text1 {
   margin: 20px -15px;
}

.text2 {
  margin: -20px 35px;
}

</style>
