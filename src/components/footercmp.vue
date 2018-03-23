<template>
  <div id="footercmp">
    <p></p>
  </div>
</template>

<script>



export default {
  name: "footercmp",
  data() {
    return {
      msg: "placeholder"
    };
  },
  components: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

#footercmp {
    border-radius: 0 0 10px 10px;
    background-color: gainsboro;
    margin: auto;
    display: grid;
    grid-template-columns: 20px 200px 20px 200px 20px 200px 20px 200px 20px;
    grid-template-rows: 20px 20px 20px;
    border: solid;
    color: whitesmoke;
    border-left-width: 2px;
    border-right-width: 2px;
    border-top-width: 2px;
    border-bottum-width: 0px;
    box-shadow: 0px 1px 1px 2px #888888;
    max-width: 1520px;
    min-width: 934px;
    
}

</style>