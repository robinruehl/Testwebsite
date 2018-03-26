<template>
  <div class = "menu">
  <p>FUN</p>
    <div class = "dropdown 1">
      <p class = "gamemodes" @click="setcontent(1)"> &#187; Gamemodes </p>
      <p class = "droped 1 fade"> test </p>
      <p class = "droped 1 fade"> test </p>
      <p class = "droped 1 fade"> test </p>
      <p class = "droped 1 fade"> test </p>
    </div>
    <div class = "dropdown 2">
      <p class = "maps" @click="setcontent(2)" > &#187; Maps </p>
      <p class = "droped 2 fade"> test </p>
      <p class = "droped 2 fade"> test </p>
      <p class = "droped 2 fade"> test </p>
      <p class = "droped 2 fade"> test </p>
    </div>
    <div class = "dropdown 3">
      <p class = "servers" @click="setcontent(3)"> &#187; Servers </p>
      <p class = "droped 3 fade"> test </p>
      <p class = "droped 3 fade"> test </p>
      <p class = "droped 3 fade"> test </p>
      <p class = "droped 3 fade"> test </p>
    </div>
    <div class = "dropdown 4">
      <p class = "strats" @click="setcontent(4)"> &#187; Strats </p>
      <p class = "droped 4 fade"> test </p>
      <p class = "droped 4 fade"> test </p>
      <p class = "droped 4 fade"> test </p>
      <p class = "droped 4 fade"> test </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "menucmp",
  data() {
    return {
      msg: "placeholder"
    };
  },
  methods: {
    showcontent(content) {
      var i;
      var dropdown = document.getElementsByClassName("dropdown")
      var droped = document.getElementsByClassName("droped");
      var menu = document.getElementsByClassName("menu");
      for (i = 0; i < droped.length; i++) {
        droped[i].style.display = "none";  
      }
      for (i = 0; i < 4; i++)
      droped[(dropdown.length * (content - 1)) + i].style.display = "block";
    },
    setcontent(n) {
      this.showcontent(n);
    },
  },
};
</script>

<style scoped>

.menu {
  background-color: white;
  border: 2px solid whitesmoke;
  max-width: 200px;
  font-size: 25px;
  margin: 10px 0px;
}

.dropdown {
  font-size: 18px;
  padding: 0px 0px;
}

.droped {
  display: none;
  font-size: 15px;
  background-color: gainsboro;
  border: 2px solid whitesmoke;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 0.4s;
  animation-name: fade;
  animation-duration: 0.4s;
}

@-webkit-keyframes fade {
  from {opacity: .4; margin: -10px 0px}
  to {opacity: 1; margin: 14px 0px}
}

@keyframes fade {
  from {opacity: .3; margin: -10px 0px} 
  to {opacity: 1; margin: 15px 0px}
}

</style>
