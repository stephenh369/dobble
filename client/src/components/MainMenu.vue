<template>
  <div id="main-menu">
      <img class="logo" src="../assets/dobble.png" alt="dobble-logo"/>
      <button id="main-menu-start" class="btn" v-on:click="handleClick">Start Game</button>
      <button id="main-menu-scores" class="btn">High Scores</button>
      <button id="main-menu-tutorial" class="btn">Tutorial</button>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  methods: {
    handleClick () {
      eventBus.$emit("start-game")
    }
  }
}
</script>

<style scoped>
  #main-menu {
    background-color: rgb(141, 83, 141);
    width: 100vw;
    max-height: 720px;
    height: 100vh;
    position: relative;
  }
  #main-menu-start {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #main-menu-scores {
    position: absolute;
    top: 66%;
    left: 50%;
    transform: translate(-50%, -66%);
  }
    #main-menu-tutorial {
    position: absolute;
    top: 82%;
    left: 50%;
    transform: translate(-50%, -82%);
  }
</style>