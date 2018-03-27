<template>
  <router-link :to="{name: 'DeCreator'}" class = "cancerlink">
    <div type = "button" class = "debuttoncreator">
      <div class = "creatortext">
        <p class = "text1">The</p>
        <p class = "text2">Creator</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "debuttoncreator",
  data() {
    return {
      msg: "placeholder"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.debuttoncreator {
  background-color: whitesmoke;
  border: 2px solid whitesmoke;
  color: white;
  text-decoration: none;  
  display: inline-block;
  font-size: 25px;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 0px;
  //cursor: pointer;
  width: 140px;
  height: 30px;
  margin: 0px 10px;
  top: -10px;
  position: relative;

}

.debuttoncreator:hover {
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
  width: 140px;
  height: 30px;
  margin: 0px 10px;
  top: -10px;
  position: relative;

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
