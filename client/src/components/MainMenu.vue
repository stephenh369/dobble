<template>
  <div>
      <button v-on:click="handleClick">Start Game</button>
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

<style>

</style>