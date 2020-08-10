<template>
  <div id="game-board">
      <timer />
      <div id="score-display">Score: {{score}}</div>
      <img class="logo" src="../assets/dobble.png" alt="dobble-logo"/>
      <div class="card-div">
        <player-card :playerCard="dealtPlayerCard" class="card"/>
        <opponent-card :opponentCard="dealtOpponentCard" class="card"/>
      </div>
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
            dealtPlayerCard: null,
            dealtOpponentCard: null,
            selectedSymbols: [],
            score: 0
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

        eventBus.$on("symbol-changed", cardSymbol => {
            this.selectedSymbols = [cardSymbol]
        });

        eventBus.$on("time-up", () => {
            eventBus.$emit("game-over", this.score)
        })

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
            eventBus.$emit('guess-over');
        },
        winRound() {
            this.score += 1;
            this.selectedSymbols = [];
            this.dealPlayerCard();
            this.dealOpponentCard();
            eventBus.$emit('guess-over');
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
    #game-board {
        width: 85vw;
        height: 75vh;
        z-index: 1;
        background: url('../assets/wood-pattern.png') #996100;
        background-position: center;
        background-size: auto;
        border-radius: 2rem;
    }
    .logo {
        position: absolute;
        top: 18%;
        left: 50%;
        transform: translate(-50%, -18%);
        width: 80px;
        height: 80px;
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
        background-color: #f4f4f4;
        border-radius: 50%;
        border: 1px solid rgba(124, 1, 124, 0.6);
        box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
    }
    .card:hover {
        box-shadow: 0px 0px 25px 5px rgba(0,0,0,0.75);
        background-color: white;
        transition: 0.3s;
    }
    .btn-card {
        border-radius: 10px;
        border: 1px solid rgba(117, 1, 117, 0.692);
        cursor: pointer;
    }
    .btn-card:hover,
    .btn-card:focus {
        background-color: rgba(124, 1, 124, 0.2);
    }
</style>
