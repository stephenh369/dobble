<template>
  <div id="game-over">

    <div id="game-over-container">
      <div id="game-over-heading">
        <h1>Game Over</h1>
      </div>
    
      <div id="game-over-score">
        <p>You scored: {{score}}</p>
      </div>

    <form v-on:submit="submitScore" v-if="!scoreSubmitted">
      <label for="name-input">Enter your name to submit your high score</label>
      <input type="text" id="name-input" placeholder="Enter name here..." v-model="name" required>
      <input class="btn" type="submit" value="Save">
    </form>

    <p v-if="scoreSubmitted">Thanks, {{name}}! Your score has been saved.</p>
      <div id="game-over-btn-div">
        <button class="btn" v-on:click="restartGame">Restart?</button>
        <button class="btn" v-on:click="mainMenu">Main menu</button>
        <button class="btn" v-on:click="highScores">High scores</button>
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
  #game-over-heading {
    text-align: center;
    font-size: 28px;
    margin-bottom: 35px;
  }
  #game-over-score {
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  #game-over-btn-div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    width: 50%;
    align-items: center;
  }
  #name-input {
    margin: 0 20px;
    background: transparent;
    border: none;
    border-bottom: 2px solid black;
  }
  #game-over-btn-div > button {
    width: 100%;
  }
</style>
