<template>
  
</template>

<script>

import CardService from '../services/CardService.js'

export default {
    name: 'game-board',
    data() {
        return {
            cards: [],
            playerCard: null,
            opponentCard: null,
        }
    },
    mounted() {
        CardService.getCards()
        .then(cards => this.cards = cards);

        this.dealPlayerCard();
        this.dealOpponentCard();

    },
    methods: {
        dealPlayerCard() {
            const card = this.cards[Math.floor(Math.random() * this.cards.length)];
            this.playerCard = card;
        },
        dealOpponentCard() {
            const card = this.cards[Math.floor(Math.random() * this.cards.length)];
            if (JSON.stringify(this.card) === JSON.stringify(this.cardOne) ) {
                dealOpponentCard();
            } else {
                this.opponentCard = card;
            }
        }
    }
}    
</script>

<style>

</style>