<template>
  <div class="slideshow">
    <div class="mySlides fade">
      <div class="numbertext">1 / 3</div>
      <img src="https://raw.githubusercontent.com/robinruehl/CSGOFUNBASE/50c00eaf95bd0d398c2fac6828ffd6be0bc0a764/Test1.jpg" style="width:100%">
    </div>

    <div class="mySlides fade">
      <div class="numbertext">2 / 3</div>
      <img src="https://raw.githubusercontent.com/robinruehl/CSGOFUNBASE/50c00eaf95bd0d398c2fac6828ffd6be0bc0a764/Test2.jpg" style="width:100%">
    </div>

    <div class="mySlides fade">
      <div class="numbertext">3 / 3</div>
      <img src="https://raw.githubusercontent.com/robinruehl/CSGOFUNBASE/50c00eaf95bd0d398c2fac6828ffd6be0bc0a764/Test3.jpg" style="width:100%">
    </div>

    <a class="prev" @click="plusSlides(-1)">&#8592;</a>
    <a class="next" @click="plusSlides(1)">&#8594;</a>

    <div style="text-align:center">
      <span class="dot" @click="currentSlide(1)"></span> 
      <span class="dot" @click="currentSlide(2)"></span> 
      <span class="dot" @click="currentSlide(3)"></span>
      
    </div>
  </div>
</template>




<script>
var slideIndex = 1;

export default {
  name: "slidercmp",
  methods: {
    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    },
    plusSlides(n) {
      slideIndex += n;
      this.showSlides(slideIndex);
    },
    currentSlide(n) {
      this.showSlides((slideIndex = n));
    }
  },
  data() {
    return {};
  },
  components: {},
  mounted() {
    if (this.slideIndex !== 0) {
      this.showSlides(slideIndex);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slideshow {
  max-width: 1300px;
  position: relative;
  margin: auto;
}

.mySlides {
  display: none;
  margin: 10px;
}

.next {
  font-size: 30px;
  position: absolute;
  margin: -15px 50px;
  padding: 3px;
  color: black;
  cursor: e-resize;
  transition: color, text-shadow 0.6s ease;
}

.prev {
  font-size: 30px;
  position: absolute;
  margin: -15px -86px;
  padding: 3px;
  color: black;
  cursor: w-resize;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  transition: color, text-shadow 0.6s ease;
}

.next:hover {
  font-size: 30px;
  position: absolute;
  margin: -15px 50px;
  padding: 3px;
  color: deepskyblue;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
  cursor: e-resize;
}

.prev:hover {
  font-size: 30px;
  position: absolute;
  margin: -15px -86px;
  padding: 3px;
  color: deepskyblue;
  text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
  cursor: w-resize;
}

.text {
  color: black;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
  margin: 40px -25px;
}

.numbertext {
  color: black;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}

.dot {
  cursor: pointer;
  height: 12px;
  width: 12px;
  background-color: #bbb;
  border-radius: 40%;
  display: inline-block;
  transition: background-color 0.6s ease;
  margin: 4px 7px;
}

.active,
.dot:hover {
  background-color: #717171;
}
</style>
