<template>
  <div type = "button" class = "debuttonhome">
    <router-link :to="{name: 'DeHome'}" class = "cancerlink">
      <div class = "hometext">
        <p>CSGO</p>
        <p class = "p1">funbase</p>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "debuttonhome",
  data() {
    return {
      msg: "placeholder"
    };
  }
};
</script>


<style scoped>

.debuttonhome {
    background-color: whitesmoke;
    border: 2px solid whitesmoke;
    color: white;
    text-align: center;
    text-decoration: none;  
    display: inline-block;
    font-size: 25px;
    text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
    line-height: 0px;
    //cursor: pointer;
    width: 80px;
    height: 51px;
    margin: 5px 5px;
    position: relative;
}

.debuttonhome:hover{
    border-radius: 3px;
    background-color: gainsboro;
    border: 2px solid whitesmoke;
    color: white;
    text-align: center;
    text-decoration: none;  
    display: inline-block;
    font-size: 25px;
    text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
    line-height: 0px;
    //cursor: pointer;
    width: 80px;
    height: 51px;
    margin: 5px 5px;
    position: relative;
}

.hometext {
  margin: -10px 0px;
}

.p1 {
  font-size: 21px
}

.cancerlink {
  text-decoration: none;
  color: white;
}
</style>