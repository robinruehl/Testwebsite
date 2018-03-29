<template>
  <div class = "languagemenu">
    <div class = "dropdownd 1">
      <p class = "Language dropper" @click="setcontent(1)">&#8594; Language </p>
      <router-link :to="{name: 'DeHome'}"  class = "cancerlink">
        <p class = "dropped 1 fadein"> Deutsch </p>
      </router-link>
      <router-link :to="{name: 'Home'}" class = "cancerlink">
        <p class = "dropped 1 fadein"> English </p>
      </router-link>
    </div>
  </div>
</template>

<script>
var isdropped = 0;

export default {
  name: "languagebutton",
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

      for (i = 0; i < 2; i++) {
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

        setTimeout(this.displaynone, 280);
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
.languagemenu {
  background-color: gainsboro;
  border: 2px solid whitesmoke;
  max-width: 200px;
  min-width: 97px;
  max-height: 420px;
  font-size: 15px;
  margin: auto;
  margin-right: 5px;
  margin-left: 5px;
  //box-shadow: -1px -1px 1px 1px #888888;
  color: black;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.dropdown {
  font-size: 12px;
  padding: 0px 0px;
  color: white;
  margin: 0px 0px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.dropped {
  display: none;
  font-size: 10px;
  background-color: lightgray;
  border: 2px solid whitesmoke;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  text-decoration: none;
  line-height: 1;
  margin: 0;
}

.dropped:hover {
  display: none;
  font-size: 10px;
  background-color: gainsboro;
  border: 2px solid whitesmoke;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  text-decoration: none;
  cursor: pointer;
  line-height: 1;
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
  color: white;
  margin: 0px 0px;
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
    line-height: 1;
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
    line-height: 1;
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
    line-height: 1;
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
    line-height: 1;
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
