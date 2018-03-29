<template>
  <div id = "dehome">
    <div class = "headerapp">
      <deheadercmp/>
    </div>
    <div class = "maingrid">
      
      <div class = "sidebar">
        <sidebarcmp/>
      </div>
      <div class = "center" :class="{active: isActive}">
        <slidercmp/>
        <button @click="clicker"></button>
      </div>
      <div class = "mbar">
        <mbarcmp/>
      </div>
      <div class = "mheader">
        <mheadercmp/>
      </div>
    </div>
    <div class = "footerapp">
      <footercmp/>
    </div> 
  </div>
</template>

<script>
import slidercmp from "../components/slidercmp";
import sidebarcmp from "../components/sidebarcmp";
import deheadercmp from "../components/deheadercmp";
import footercmp from "../components/footercmp";
import mbarcmp from "../components/mbarcmp";
import mheadercmp from "../components/mheadercmp";

export default {
  name: "DeHome",
  components: {
    slidercmp,
    sidebarcmp,
    deheadercmp,
    footercmp,
    mbarcmp,
    mheadercmp
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clicker() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped>
#dehome {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //min-width: 990px ;
}

.maingrid {
  display: grid;
  position: reletave;
  //box-shadow: 0px 0px 1px 2px #888888;
  max-width: 1580px;

  grid-template-columns: 30px 1fr 1fr 1fr 1fr 10px 1fr 30px;
  grid-template-rows: 10px 200px 10px 200px 10px 200px 10px 200px 10px auto 10px;
  margin: auto;
}

.center {
  background-color: gainsboro;
  grid-column: 2 / 6;
  grid-row: 2 / 11;
  border: 2px solid whitesmoke;
  overflow: hidden;
  position: relative;
  box-shadow: -1px -1px 1px 1px #888888;
  max-width: 1350px;
  //min-width: 410px;
  max-height: 832px;
  margin: 1px 0px 0px 0px;
  transition: background-color 0.8s ease;
}

.active {
  background-color: green;
}

/*.hometitle {
  font-size: 45px;
  font-weight: 500;
  margin: 0;
}*/

.sidebar {
  position: relative;
  background-color: gainsboro;
  grid-column: 7 / 8;
  grid-row: 2 / 9;
  //border: 2px solid whitesmoke;
  max-width: 300px;
  min-width: 185px;
  margin: 1px 0px;
  padding: 0px;
}

.mbar {
  display: none;
}

.deheaderapp {
  background-color: white;
  border: solid;
  color: whitesmoke;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 4px;
  border-bottum-width: 0px;
}

.mheader {
  display: none;
}

.footerapp {
  margin: 0px 30px 0px 30px;
}

@media only screen and (max-width: 600px) {
  #dehome {

  }

  .maingrid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: reletave;
    //box-shadow: 0px 0px 1px 2px #888888;
    //max-width: 1580px;

    grid-template-columns: 10px 1fr 1fr 1fr 10px;
    grid-template-rows: auto;
    margin: auto;
  }

  .center {
    background-color: gainsboro;
    grid-column: 2 / 5;
    grid-row: 1 / 2;
    border: 2px solid whitesmoke;
    overflow: hidden;
    box-shadow: 0px 0px 1px 2px #888888;
    //max-width: 1350px;
    //min-width: 410px;
    max-height: 250px;
    margin: 1px 10px 0px 10px;
    transition: background-color 0.8s ease;
    margin-top: 34px;
  }

  .active {

  }

  .sidebar {
    display: none;
  }

  .mbar {
    display: inline-block;
    margin: auto;
    margin-top: 0px;
  }

  .mheader {
    display: inline-block;
    position: fixed;
    //background-color: black;
    width: 100%;
    margin-top: -10px;
  }

  .headerapp {
    display: none;
  }

  .footerapp {
    margin: 0px 10px 0px 10px;
  }

}

</style>
