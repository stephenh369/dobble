<template>
  <div id="main-menu">
      <img class="logo" src="../assets/dobble.png" alt="dobble-logo"/>
      <button id="main-menu-start" class="btn" v-on:click="handleClick">Start Game</button>
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
    height: 100vh;
    position: relative;
  }
  #main-menu-start {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>