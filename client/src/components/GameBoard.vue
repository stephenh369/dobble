<template>
  <div id="game-board">
      <div class="card-div">
        <player-card :playerCard="dealtPlayerCard" class="card"/>
        <opponent-card :opponentCard="dealtOpponentCard" class="card"/>
      </div>
  </div>
</template>

<script>
import CardService from '../services/CardService.js'
import PlayerCard from './PlayerCard.vue'
import OpponentCard from './OpponentCard.vue'
import { eventBus } from '@/main.js'

export default {
    name: 'game-board',
    data() {
        return {
            cards: [],
            dealtPlayerCard: null,
            dealtOpponentCard: null,
            selectedSymbols: []
        }
    },
    mounted() {
        CardService.getCards()
        .then(cards => this.cards = cards)
            .then(() => this.dealPlayerCard())
            .then(() => this.dealOpponentCard());

        eventBus.$on('symbol-selected', (cardSymbol) => { 
            this.selectedSymbols.push(cardSymbol);
            if (this.checkWin() === true) {
                this.winRound();
            } else if (this.twoSymbols() === true && this.symbolsSame() === false){
                this.incorrectGuess();
            }
        });
    },
    methods: {
        dealPlayerCard() {
            const card = this.cards[Math.floor(Math.random() * this.cards.length)];
            this.dealtPlayerCard = card;
        },
        dealOpponentCard() {
            const card = this.cards[Math.floor(Math.random() * this.cards.length)];
            if (JSON.stringify(card) === JSON.stringify(this.dealtPlayerCard) ) {
                this.dealOpponentCard();
            } else {
                this.dealtOpponentCard = card;
            }
        },
        twoSymbols() {
            if (this.selectedSymbols.length === 2) {
                return true;
            } else {
            return false;
            }
        },
        symbolsSame() {
            if (this.selectedSymbols[0] === this.selectedSymbols[1]) {
                return true;
            } else {
            return false;
            }
        },
        checkWin() {
            if (this.twoSymbols() === true && this.symbolsSame() === true) {
                return true;
            } else {
            return false;
            }
        },
        incorrectGuess() {
            this.selectedSymbols = [];
        },
        winRound() {
            this.selectedSymbols = [];
            this.dealPlayerCard();
            this.dealOpponentCard();
        }
    },
    components: {
        "player-card": PlayerCard,
        "opponent-card": OpponentCard,
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
    .card-div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
       transform: translateY(20vh);

    }
    .card {
        display: inline-block;
        width: 150px;
        height: 150px;
        z-index: 2;
        background-color: white;
        border-radius: 50%;
    }
</style>