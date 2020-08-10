<template>
  <div id="app">
    <game-board />
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import GameBoard from './components/GameBoard'

export default {
  components: {
    "game-board": GameBoard
  },

  mounted () {
    eventBus.$on("time-up", () => console.log("Round over: time expired"));
  }

}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
  }
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    background-color: black;
  }
</style>
