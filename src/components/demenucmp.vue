<template>
  <div class = "demenu">
    <router-link :to="{name: 'DeFun'}"  class = "cancerlink2">
      <p>FUN</p>
    </router-link>
    <div class = "dropdown 1">
      <p class = "gamemodes droper" @click="setcontent(1)"> ⊕ Gamemodes  </p>
      <router-link :to="{name: 'DeTest1'}"  class = "cancerlink">
        <p class = "droped 1 fadein"> Test Page </p>
      </router-link>
      <router-link :to="{name: 'DeSurf'}" class = "cancerlink">
        <p class = "droped 1 fadein"> Surf </p>
      </router-link>
      <router-link :to="{name: 'DeJail'}" class = "cancerlink">
        <p class = "droped 1 fadein"> Jail Break </p>
      </router-link>
      <router-link :to="{name: 'DeMinigame'}" class = "cancerlink">
        <p class = "droped 1 fadein"> Mini Games </p>
      </router-link>
    </div>
    <div class = "dropdown 2">
      <p class = "maps droper" @click="setcontent(2)" > ⊕ Maps  </p>
      <p class = "droped 2 fadein"> test </p>
      <p class = "droped 2 fadein"> test </p>
      <p class = "droped 2 fadein"> test </p>
      <p class = "droped 2 fadein"> test </p>
    </div>
    <div class = "dropdown 3">
      <p class = "servers droper" @click="setcontent(3)"> ⊕ Servers  </p>
      <p class = "droped 3 fadein"> test </p>
      <p class = "droped 3 fadein"> test </p>
      <p class = "droped 3 fadein"> test </p>
      <p class = "droped 3 fadein"> test </p>
    </div>
    <div class = "dropdown 4">
      <p class = "strats droper" @click="setcontent(4)"> ⊕ Strats  </p>
      <p class = "droped 4 fadein"> test </p>
      <p class = "droped 4 fadein"> test </p>
      <p class = "droped 4 fadein"> test </p>
      <p class = "droped 4 fadein"> test </p>
    </div>
  </div>
</template>

<script>
var isdroped = 0;
var is1;
var is2;
var is3;
var is4;

export default {
  name: "demenucmp",
  data() {
    return {
      msg: "ayy"
    };
  },
  methods: {
    showcontent(content) {
      var i;
      var dropdown = document.getElementsByClassName("dropdown");
      var droped = document.getElementsByClassName("droped");
      var droper = document.getElementsByClassName("droper");

      for (i = 0; i < droped.length; i++) {
        droped[i].className = droped[i].className.replace(
          " fadeout",
          " fadein"
        );
      }

      droper[content - 1].innerHTML = droper[content - 1].innerHTML.replace(
        "⊕",
        "⊗"
      );

      for (i = 0; i < 4; i++) {
        droped[dropdown.length * (content - 1) + i].style.display = "block";
      }
    },
    setcontent(n) {
      if (n === 1 && is1 === 1) {
        is1 = 0;

        setTimeout(this.displaynotthisone(1), 450);
      } else if (n === 2 && is2 === 1) {
        is2 = 0;

        setTimeout(this.displaynotthisone(2), 450);
      } else if (n === 3 && is3 === 1) {
        is3 = 0;

        setTimeout(this.displaynotthisone(3), 450);
      } else if (n === 4 && is4 === 1) {
        is4 = 0;

        setTimeout(this.displaynotthisone(4), 450);
      } else if (n === 1) {
        is1 = 1;
        isdroped = n;

        setTimeout(this.showcontent(n), 500);
      } else if (n === 2) {
        is2 = 1;
        isdroped = n;

        setTimeout(this.showcontent(n), 500);
      } else if (n === 3) {
        is3 = 1;
        isdroped = n;

        setTimeout(this.showcontent(n), 500);
      } else if (n === 4) {
        is4 = 1;
        isdroped = n;

        setTimeout(this.showcontent(n), 500);
      }

      /*isdroped = n;
        for (i = 0; i < droped.length; i++) {
          droped[(dropdown.length * (n - 1)) + i].className = droped[(dropdown.length * (n - 1)) + i].className.replace(" fadein", " fadeout");
        }*/

      //setTimeout(this.displaynotthisone(isdroped), 450);

      /*else if (isdroped === n){
        
        for (i = 0; i < droped.length; i++) {
          droped[(dropdown.length * (n - 1)) + i].className = droped[(dropdown.length * (n - 1)) + i].className.replace(" fadein", " fadeout");
        }

        isdroped = 0;

        setTimeout(this.displaynone, 450);*/
    },
    displaynone() {
      var i;
      var droped = document.getElementsByClassName("droped");

      for (i = 0; i < droped.length; i++) {
        droped[i].style.display = "none";
      }
    },
    displaynotthisone(n) {
      var i;
      var droped = document.getElementsByClassName("droped");
      var dropdown = document.getElementsByClassName("dropdown");
      var droper = document.getElementsByClassName("droper");

      droper[n - 1].innerHTML = droper[n - 1].innerHTML.replace("⊗", "⊕");

      for (i = 0; i < 4; i++) {
        droped[dropdown.length * (n - 1) + i].style.display = "none";
      }
    }
  }
};
</script>

<style scoped>
.demenu {
  background-color: whitesmoke;
  border: 2px solid gainsboro;
  max-width: 200px;
  font-size: 25px;
  box-shadow: -1px -1px 1px 1px #888888;
  color: black;
  text-shadow: 0 1px 2px rgba(200, 30, 30, 0.5);
  margin: auto;
  margin-top: 10px;
  margin-left: 0px;
}

.dropdown {
  font-size: 18px;
  padding: 0px 0px;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  margin: auto;
  margin-left: 5px;
  text-align: left;
}

.droped {
  display: none;
  font-size: 15px;
  background-color: skyblue;
  border: 2px solid gainsboro;
  text-decoration: none;
  margin: auto;
  margin-top: 15px;
  margin-left: 5px;
}

.droped:hover {
  display: none;
  font-size: 15px;
  background-color: lightblue;
  border: 2px solid gainsboro;
  text-decoration: none;
  cursor: pointer;
}

.droper {
  background-color: deepskyblue;
  border: 2px solid gainsboro;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.droper:hover {
  background-color: lightskyblue;
  border: 2px solid gainsboro;
  cursor: pointer;
}

.fadein {
  -webkit-animation-name: fadein;
  -webkit-animation-duration: 0.6s;
  animation-name: fadein;
  animation-duration: 0.6s;
}

@-webkit-keyframes fadein {
  from {
    opacity: 0.4;
    margin: 0px 0px 0 5px;
    line-height: 0.4;
  }
  to {
    opacity: 1;
    margin: 16px 0px 0 5px;
    line-height: 1.3;
  }
}

@keyframes fadein {
  from {
    opacity: 0.3;
    margin: 0px 0px 0 5px;
    line-height: 0.4;
  }
  to {
    opacity: 1;
    margin: 16px 0px 0 5px;
    line-height: 1.3;
  }
}

.fadeout {
  -webkit-animation-name: fadeout;
  -webkit-animation-duration: 0.6s;
  animation-name: fadeout;
  animation-duration: 0.6s;
}

@-webkit-keyframes fadeout {
  from {
    opacity: 1;
    margin: 16px 0px;
    line-height: 1.3;
  }
  to {
    opacity: 0.1;
    margin: -6px 0px;
    line-height: 0;
  }
}

@keyframes fadeout {
  from {
    opacity: 1;
    margin: 16px 0px;
    line-height: 1.3;
  }
  to {
    opacity: 0.1;
    margin: -6px 0px;
    line-height: 0;
  }
}

.cancerlink {
  text-decoration: none;
  color: white;
}

.cancerlink2 {
  text-decoration: none;
  color: black;
}
</style>
