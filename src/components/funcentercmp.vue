<template>
  <div class ="funcenter">
    <div></div>
  
  </div>
</template>

<script>
export default {
  name: "funcenter",
  data() {
    return {
      msg: "placeholder"
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>

.funcenter {
  background-color: white;
  border: 2px solid whitesmoke;
  max-width: 200px;
  font-size: 25px;
  margin: 10px 0px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
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
