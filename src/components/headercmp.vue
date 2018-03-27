<template>
  <div class = "header">
    <buttonhome/>
    <buttonfun/>
    <buttonmission/>
    <buttoncreator/>
    <buttonde/>
    <buttoneng/>
  </div>
</template>

<script>
import buttonhome from "./homebutton";
import buttonfun from "./funbutton";
import buttonmission from "./missionbutton";
import buttoncreator from "./creatorbutton";
import buttonde from "./debutton";
import buttoneng from "./engbutton";

export default {
  name: "deheadercmp",
  data() {
    return {
      msg: "placeholder"
    };
  },
  components: {
    buttonhome,
    buttonfun,
    buttonmission,
    buttoncreator,
    buttonde,
    buttoneng,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.header {
    //border-radius: 10px 10px 0 0;
    background-color: white;
    padding: 10px 10px 10px 10px;
    /*display: grid;
    grid-template-columns: 20px 200px 20px 200px 20px 200px 20px 200px 20px;
    grid-template-rows: 20px 20px 20px;*/
    position: reletave;
    //box-shadow: 0px 0px 1px 2px #888888;
    max-width: 1580px;
    //min-width: 1000px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}


.buttonhome {

}
.buttonfun {

  
}

.buttonmission {

  
}

.buttoncreator {

}

.hometext {
  margin: -20px 0px;
}

.p1 {
  font-size: 21px
}

.buttonde {
  
}

.buttoneng {
  
}

</style>