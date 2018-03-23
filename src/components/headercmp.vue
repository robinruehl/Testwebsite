<template>
  <div class = "header">
    <buttonhome/>
    <buttonfun/>
    <buttonmission/>
    <buttoncreator/>
  </div>
</template>

<script>
import buttonhome from "./homebutton";
import buttonfun from "./funbutton";
import buttonmission from "./missionbutton";
import buttoncreator from "./creatorbutton";

export default {
  name: "headercmp",
  data() {
    return {
      msg: "placeholder"
    };
  },
  components: {
    buttonhome,
    buttonfun,
    buttonmission,
    buttoncreator
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.header {
    //border-radius: 10px 10px 0 0;
    background-color: white;
    padding: 10px 10px 10px 10px;
    display: grid;
    grid-template-columns: 20px 200px 20px 200px 20px 200px 20px 200px 20px;
    grid-template-rows: 20px 20px 20px;
    position: reletave;
    //box-shadow: 0px 0px 1px 2px #888888;
    max-width: 1580px;
    min-width: 1000px;
    margin: auto;
}


.buttonhome {
  marign: auto;
}
.buttonfun {
  margin: 5px 110px;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 0px;
  padding-bottom: 0px;
  
}

.buttonmission {
  margin: 5px 25px;
  padding-left: 23px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 40px;
}

.buttoncreator {
  margin: 5px 160px;
}

.hometext {
  margin: -20px 0px;
}

.p1 {
  font-size: 21px
}
</style>