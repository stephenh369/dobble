<template>
  <div>
      <timer />
      <player-card :playerCard="playerCard" />
      <opponent-card :opponentCard="opponentCard" />
  </div>
</template>

<script>
import CardService from '../services/CardService.js'
import Timer from './Timer.vue'
import PlayerCard from './PlayerCard.vue'
import OpponentCard from './OpponentCard.vue'
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
    },
    components: {
        "timer": Timer,
        "player-card": PlayerCard,
        "opponent-card": OpponentCard,
    }
}    
</script>

<style>

</style>
