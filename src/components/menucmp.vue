<template>
  <div class = "menu">
  <p>FUN</p>
    <div class = "dropdown 1">
      <p class = "gamemodes droper" @click="setcontent(1)">&#8594; Gamemodes </p>
      <p class = "droped 1 fade"> test </p>
      <p class = "droped 1 fade"> test </p>
      <p class = "droped 1 fade"> test </p>
      <p class = "droped 1 fade"> test </p>
    </div>
    <div class = "dropdown 2">
      <p class = "maps droper" @click="setcontent(2)" > &#8594; Maps </p>
      <p class = "droped 2 fade"> test </p>
      <p class = "droped 2 fade"> test </p>
      <p class = "droped 2 fade"> test </p>
      <p class = "droped 2 fade"> test </p>
    </div>
    <div class = "dropdown 3">
      <p class = "servers droper" @click="setcontent(3)"> &#8594; Servers </p>
      <p class = "droped 3 fade"> test </p>
      <p class = "droped 3 fade"> test </p>
      <p class = "droped 3 fade"> test </p>
      <p class = "droped 3 fade"> test </p>
    </div>
    <div class = "dropdown 4">
      <p class = "strats droper" @click="setcontent(4)"> &#8594; Strats </p>
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
      //var menu = document.getElementsByClassName("menu");
      for (i = 0; i < droped.length; i++) {
        droped[i].style.display = "none";  
      }
      for (i = 0; i < 4; i++)
      droped[(dropdown.length * (content - 1)) + i].style.display = "block";
      
      //menu.style.height = "450px"
    },
    setcontent(n) {
      this.showcontent(n);
    },
    /*changeText()
    {
    document.getElementsByClassName('boldStuff').innerHTML = 'Fred Flinstone';
    },*/
  },
};
</script>

<style scoped>

.menu {
  background-color: white;
  border: 2px solid gainsboro;
  max-width: 200px;
  font-size: 25px;
  margin: 10px 0px;
  box-shadow: -1px -1px 1px 1px #888888;
  color: whitesmoke;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.dropdown {
  font-size: 18px;
  padding: 0px 0px;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.droped {
  display: none;
  font-size: 15px;
  background-color: deepskyblue;
  border: 2px solid gainsboro;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.droper {
  background-color: deepskyblue;
  border: 2px solid gainsboro;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
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
