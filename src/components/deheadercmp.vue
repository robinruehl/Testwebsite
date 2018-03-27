<template>
  <div class = "deheader">
    <debuttonhome/>
    <debuttonfun/>
    <debuttonmission/>
    <debuttoncreator/>
    <buttonde/>
    <buttoneng/>
  </div>
</template>

<script>
import debuttonhome from "./dehomebutton";
import debuttonfun from "./defunbutton";
import debuttonmission from "./demissionbutton";
import debuttoncreator from "./decreatorbutton";
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
    debuttonhome,
    debuttonfun,
    debuttonmission,
    debuttoncreator,
    buttonde,
    buttoneng,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.deheader {
    //border-radius: 10px 10px 0 0;
    background-color: white;
    padding: 10px 10px 10px 10px;
    /*display: grid;
    grid-template-columns: 20px 200px 20px 200px 20px 200px 20px 200px 20px;
    grid-template-rows: 20px 20px 20px;*/
    position: reletave;
    //box-shadow: 0px 0px 1px 2px #888888;
    max-width: 1580px;
    min-width: 1000px;
    margin: auto;
}


.debuttonhome {

}
.debuttonfun {

  
}

.debuttonmission {

  
}

.debuttoncreator {

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