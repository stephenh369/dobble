<template>
  <div id="app">
    <main-menu v-if="!gameStart && !gameOver" />
    <game-board v-if="!gameOver && gameStart"/>
    <game-over v-if="gameOver" />
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import MainMenu from './components/MainMenu';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import ScoreList from './components/ScoreList';

export default {
  data () {
    return {
      gameStart: false,
      gameOver: false
    }
  },
  components: {
    "main-menu": MainMenu,
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
      this.gameStart = true;
    });

    eventBus.$on("start-game", () => {
      console.log("starting game...");
      this.gameOver = false;
      this.gameStart = true;
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
  .btn {
    background-color: #E4E660;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
  }
  .btn:hover {
    background-color: #EBEC83;
  }
</style>
