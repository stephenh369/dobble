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
    <button v-on:click="restartGame">Restart?</button>
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
    restartGame () {
      eventBus.$emit("restart-game")
    },

    submitScore () {
      event.preventDefault()

      ScoreService.postScores({
        name: this.name,
        score: this.score
      })
        .then(() => this.scoreSubmitted = true);
    }
  }
}
</script>

<style>
  #game-over {
    background-color: white;
  }
</style>
