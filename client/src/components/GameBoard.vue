<template>
  
</template>

<script>

import CardService from '../services/CardService.js'

export default {
    name: 'game-board',
    data() {
        return {
            cards: []
        }
    },
    mounted() {
        CardService.getCards()
        .then(cards => this.cards = cards);
  }
}
</script>

<style>

</style>