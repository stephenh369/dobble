<template>
  <div id="game-over">
    <div id="game-over-container">
    <h1>Game Over</h1>
    <p>You scored: {{score}}</p>
    
    <form v-on:submit="submitScore" v-if="!scoreSubmitted">
      <label for="name-input">Enter your name to submit your high score</label>
      <input type="text" id="name-input" placeholder="Enter name here..." v-model="name" required>
      <input class="btn" type="submit" value="Save">
    </form>

    <p v-if="scoreSubmitted">Thanks, {{name}}! Your score has been saved.</p>
      <div id="game-over-btn-div">
        <button class="btn btn-game-over" v-on:click="restartGame">Restart?</button>
        <button class="btn btn-game-over" v-on:click="mainMenu">Main menu</button>
        <button class="btn btn-game-over" v-on:click="highScores">High scores</button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import ScoreService from "../services/ScoreService"

export default {
  
  data () {
    return {
      name: "",
      scoreSubmitted: false
    }
  },
  
  props: {
    score: {
      type: Number,
      required: true
    }
  },

  methods: {
    highScores () {
      eventBus.$emit('high-scores');
    },

    mainMenu () {
      eventBus.$emit('main-menu');  //to App
    },

    // to App
    restartGame () {
      eventBus.$emit("restart-game")
    },

    // prevents page reloading on submit
    // POSTs score and name to database
    // then sets scoreSubmitted to true
    submitScore () {
      event.preventDefault()

      ScoreService.postScore({
        name: this.name,
        score: this.score
      }).then(() => this.scoreSubmitted = true);
    }
  }
}
</script>

<style>
  #game-over {
    background-color: rgb(141, 83, 141);
    width: 100%;
    height: 100%;
  }
  #game-over-container {
    position: absolute;
    display: grid;
    white-space: nowrap;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -45%);
  }
  #game-over-btn-div {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
  }
  #name-input {
    background: transparent;
    border: none;
    border-bottom: 2px solid black;
  }
</style>
