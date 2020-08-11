<template>
  <div id="game-over">
    <h1>Game Over</h1>
    <p>You scored: {{score}}</p>
    
    <form v-on:submit="submitScore" v-if="!scoreSubmitted">
      <label for="name-input">Enter your name to submit your high score</label>
      <input type="text" id="name-input" v-model="name" required>
      <input type="submit" value="Save">
    </form>

    <p v-if="scoreSubmitted">Thanks, {{name}}! Your score has been saved.</p>
    <button class="btn" v-on:click="restartGame">Restart?</button>
    <button class="btn" v-on:click="mainMenu">Main menu</button>
    <button class="btn" v-on:click="highScores">High scores</button>
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
    background-color: white;
  }
</style>
