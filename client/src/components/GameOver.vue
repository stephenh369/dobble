<template>
  <div id="game-over">
    <h1>Game Over</h1>
    <p>You scored: {{score}}</p>
    <button v-on:click="handleClick">Restart?</button>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  props: {
    score: {
      type: Number,
      required: true
    }
  },

  methods: {
    handleClick () {
      eventBus.$emit("restart-game")
    }
  }
}
</script>

<style>
  #game-over {
    background-color: white;
  }
</style>
