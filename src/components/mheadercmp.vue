<template>
  <div class = "mobilemenu">
    <div class = "dropdownd 1">
      <p class = "mobile dropper" @click="setcontent(1)"> CSGO - funbase </p>
      <router-link :to="{name: 'Home'}"  class = "cancerlink">
        <p class = "dropped 1 fadein"> Home </p>
      </router-link>
      <router-link :to="{name: 'Fun'}" class = "cancerlink">
        <p class = "dropped 2 fadein"> Fun </p>
      </router-link>
      <router-link :to="{name: 'Mission'}" class = "cancerlink">
        <p class = "dropped 3 fadein"> My Mission </p>
      </router-link>
      <router-link :to="{name: 'Creator'}" class = "cancerlink">
        <p class = "dropped 4 fadein"> The Creator </p>
      </router-link>
      <router-link :to="{name: 'DeHome'}" class = "cancerlink">
        <p class = "dropped 5 fadein"> Deutsch </p>
      </router-link>
      <router-link :to="{name: 'Home'}" class = "cancerlink">
        <p class = "dropped 6 fadein"> English </p>
      </router-link>
    </div>
  </div>
</template>

<script>
var isdropped = 0;

export default {
  name: "mbarcmp",
  data() {
    return {
      msg: "placeholder"
    };
  },
  methods: {
    showcontent(content) {
      var i;
      var dropdownd = document.getElementsByClassName("dropdown");
      var dropped = document.getElementsByClassName("dropped");

      for (i = 0; i < dropped.length; i++) {
        dropped[i].style.display = "none";
      }

      for (i = 0; i < 6; i++) {
        dropped[dropdownd.length * (content - 1) + i].style.display = "block";
      }
    },
    setcontent(n) {
      var i;
      var dropdownd = document.getElementsByClassName("dropdown");
      var dropped = document.getElementsByClassName("dropped");

      if (isdropped < 1) {
        isdropped = 1;

        for (i = 0; i < dropped.length; i++) {
          dropped[i].className = dropped[i].className.replace(
            " fadeout",
            " fadein"
          );
        }

        this.showcontent(n);
      } else {
        for (i = 0; i < dropped.length; i++) {
          dropped[i].className = dropped[i].className.replace(
            " fadein",
            " fadeout"
          );
        }

        isdropped = 0;

        setTimeout(this.displaynone, 200);
      }
    },
    displaynone() {
      var i;
      var dropped = document.getElementsByClassName("dropped");

      for (i = 0; i < dropped.length; i++) {
        dropped[i].style.display = "none";
      }
    }
  }
};
</script>

<style scoped>
.mobilemenu {
  background-color: gainsboro;
  border: 2px solid whitesmoke;
  //max-width: 200px;
  max-height: 420px;
  font-size: 20px;
  margin: auto;
  color: black;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.dropdown {
  font-size: 16px;
  padding: 0px 0px;
  color: white;
  margin: 0px 0px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.dropped {
  display: none;
  font-size: 16px;
  background-color: lightgray;
  border: 2px solid whitesmoke;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  text-decoration: none;
  line-height: 2;
  margin: 0;
}

.dropped:hover {
  display: none;
  font-size: 10px;
  background-color: gainsboro;
  border: 2px solid whitesmoke;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.dropper {
  background-color: lightgray;
  border: 2px solid whitesmoke;
  color: white;
  margin: 0px 0px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.dropper:hover {
  background-color: gainsboro;
  border: 2px solid whitesmoke;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.fadein {
  -webkit-animation-name: fadein;
  -webkit-animation-duration: 0.3s;
  animation-name: fadein;
  animation-duration: 0.3s;
}

@-webkit-keyframes fadein {
  from {
    opacity: 0.4;
    margin: -6x 0px;
    line-height: 0.4;
  }
  to {
    opacity: 1;
    margin: 0px 0px;
    line-height: 2;
  }
}

@keyframes fadein {
  from {
    opacity: 0.3;
    margin: -5px 0px;
    line-height: 0.4;
  }
  to {
    opacity: 1;
    margin: 0px 0px;
    line-height: 2;
  }
}

.fadeout {
  -webkit-animation-name: fadeout;
  -webkit-animation-duration: 0.3s;
  animation-name: fadeout;
  animation-duration: 0.3s;
}

@-webkit-keyframes fadeout {
  from {
    opacity: 1;
    margin: 0px 0px;
    line-height: 2;
  }
  to {
    opacity: 0.1;
    margin: -6px 0px;
    line-height: 0.4;
  }
}

@keyframes fadeout {
  from {
    opacity: 1;
    margin: 0px 0px;
    line-height: 2;
  }
  to {
    opacity: 0.1;
    margin: -5px 0px;
    line-height: 0.3;
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
