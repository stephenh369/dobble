<template>
  <div id="app">
    <main-menu v-if="pageDisplay === 'main-menu'" />
    <game-board v-if="pageDisplay === 'game-board'"/>
    <game-over v-if="pageDisplay === 'game-over'" :score="finalScore" />
    <score-list v-if="pageDisplay === 'score-list'" />
    <tutorial v-if="pageDisplay === 'tutorial'"/>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import MainMenu from './components/MainMenu';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import ScoreList from './components/ScoreList';
import Tutorial from './components/Tutorial';

export default {
  data () {
    return {
      finalScore: 0,
      pageDisplay: "main-menu"
    }
  },

  components: {
    "main-menu": MainMenu,
    "game-board": GameBoard,
    "game-over": GameOver,
    "score-list": ScoreList,
    "tutorial": Tutorial
  },

  mounted () {
    // from GameBoard when timer expires
    eventBus.$on("game-over", score => {
      console.log("Game over: time expired")
      this.finalScore = score;
      this.pageDisplay = "game-over";
    });

    // from GameOver
    eventBus.$on("restart-game", () => {
      console.log("Restarting game...");
      this.pageDisplay = "game-board";
    });

    // from MainMenu
    eventBus.$on("start-game", () => {
      console.log("starting game...");
      this.pageDisplay = "game-board";
    });

    // from MainMenu
    eventBus.$on("high-scores", () => {
      this.pageDisplay = "score-list";
    });

    // from MainMenu
    eventBus.$on("tutorial", () => {
      this.pageDisplay = "tutorial";
    });

    // from Tutorial
    eventBus.$on("main-menu", () => {
      this.pageDisplay = "main-menu";
    });
  }

}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
  }
  body {
    background-color: rgb(141, 83, 141);
  }
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: black;
  }
  .btn {
    background-color: #E4E660;
    border: 1px solid black;
    border-radius: 10px;
    width: 12.5%;
    padding: 10px 5px;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #EBEC83;
  }
</style>
