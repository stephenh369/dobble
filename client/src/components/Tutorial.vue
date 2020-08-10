<template>
  <div id="tutorial">
    <div id="tutorial-heading-div">
      <img id="tutorial-logo" src="../assets/dobble.png" alt="dobble-logo"/>
      <h2 id="tutorial-heading">Tutorial</h2>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
export default {

}
</script>

<style scoped>
  #tutorial {
    background-color: rgb(141, 83, 141);
    width: 100vw;
    height: 100vh;
  }
  #tutorial-heading-div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 10px;
  }
  #tutorial-logo {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }
</style>