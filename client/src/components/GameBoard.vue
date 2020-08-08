<template>
  <div id="game-board">
  </div>
</template>

<script>

import CardService from '../services/CardService.js'
import { eventBus } from '@/main.js'
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
        .then(cards => this.cards = cards)
            .then(() => this.dealPlayerCard())
            .then(() => this.dealOpponentCard());

    },
    methods: {
        dealPlayerCard() {
            const card = this.cards[Math.floor(Math.random() * this.cards.length)];
            this.playerCard = card;
        },
        dealOpponentCard() {
            const card = this.cards[Math.floor(Math.random() * this.cards.length)];
            if (JSON.stringify(card) === JSON.stringify(this.playerCard) ) {
                this.dealOpponentCard();
            } else {
                this.opponentCard = card;
            }
        }
    }
}    
</script>

<style>
    #game-board {
        width: 85vw;
        height: 75vh;
        z-index: 1;
        background: url('../assets/wood-pattern.png') #996100;
        background-position: center;
        background-size: auto;

    }
</style>