<template>
  <div id="app">
    <game-board v-if="! gameOver"/>
    <game-over v-if="gameOver" />
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import ScoreList from './components/ScoreList';

export default {
  data () {
    return {
      gameOver: false
    }
  },
  components: {
    "game-board": GameBoard,
    "game-over": GameOver,
    "score-list": ScoreList
  },

  mounted () {
    eventBus.$on("time-up", () => {
      console.log("Round over: time expired")
      this.gameOver = true;
    });

    eventBus.$on("restart-game", () => {
      console.log("Restarting game...");
      this.gameOver = false;
    })
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
