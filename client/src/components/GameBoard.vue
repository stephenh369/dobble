<template>
  <div id="game-board">
      <timer />
      <div id="score-display">Score: {{score}}</div>
      <button class="btn" v-on:click="mainMenu">Main menu</button>
      <img class="logo" src="../assets/dobble.png" alt="dobble-logo"/>
      <div class="card-div">
        <card :card="dealtLeftCard" class="card"/>
        <card :card="dealtRightCard" class="card"/>
      </div>
      <computer-opponent v-if="dealtLeftCard && dealtRightCard" :leftCard="dealtLeftCard" :rightCard="dealtRightCard" />
  </div>
</template>

<script>
import CardService from '../services/CardService.js'
import Timer from './Timer.vue'
import Card from './Card.vue'
import ComputerOpponent from './ComputerOpponent.vue'
import { eventBus } from '@/main.js'

export default {
    name: 'game-board',

    data() {
        return {
            cards: [],
            dealtLeftCard: null,
            dealtRightCard: null,
            selectedSymbols: [],
            score: 0
        }
    },

    mounted() {
        // retrieves cards from database, then deals two cards
        CardService.getCards()
            .then(cards => this.cards = cards)
            .then(() => this.dealLeftCard())
            .then(() => this.dealRightCard());

        // from Card: pushes symbol into selectedSymbols array, then checks if guess is correct
        // if guess is correct calls winRound, else if there are two selectedSymbols calls incorrectGuess 
        eventBus.$on('symbol-selected', (cardSymbol) => { 
            this.selectedSymbols.push(cardSymbol);
            if (this.checkWin) {
                this.winRound();
            } else if (this.twoSymbols && !this.symbolsSame) {
                this.incorrectGuess();
            }
        });

        // from Card: changes selectedSymbols to an array containing the symbol that has been chosen
        // will only be called if there is exactly one symbol in the array (symbol-selected in all other cases)
        eventBus.$on("symbol-changed", cardSymbol => {
            this.selectedSymbols = [cardSymbol]
        });

        // from Timer: sends new game-over event bus (containing score) to App
        eventBus.$on("time-up", () => {
            eventBus.$emit("game-over", this.score)
        })

    },

    computed: {

        twoSymbols() {
            return this.selectedSymbols.length === 2;
        },

        symbolsSame() {
            return this.selectedSymbols[0] === this.selectedSymbols[1];
        },

        checkWin() {
            return this.twoSymbols && this.symbolsSame;
        }
    },

    methods: {

        mainMenu () {
            eventBus.$emit("main-menu");  // to App
        },

        // selects a random card object from the array of cards, then sets that value to dealtLeftCard
        dealLeftCard() {
            const card = this.cards[Math.floor(Math.random() * this.cards.length)];
            this.dealtLeftCard = card;
        },

        // selcts a random card object from the array of cards
        // if the content of that object is the same as the content of dealtLeftCard, repeats the process
        // else, sets dealtRightCard to the selected card
        dealRightCard() {
            const card = this.cards[Math.floor(Math.random() * this.cards.length)];
            if (JSON.stringify(card) === JSON.stringify(this.dealtLeftCard) ) {
                this.dealRightCard();
            } else {
                this.dealtRightCard = card;
            }
        },

        // empties selectedSymbols array then sends eventBus to Card (card then deselects symbol)
        incorrectGuess() {
            this.selectedSymbols = [];
            eventBus.$emit('guess-over');
        },

        // increments score
        // then empties selectedSymbols array
        // then deals two new cards
        // finally sends eventBus to Card (card then deselects symbol)
        winRound() {
            this.score += 1;
            this.selectedSymbols = [];
            this.dealLeftCard();
            this.dealRightCard();
            eventBus.$emit('guess-over');
        }

    },
    
    components: {
        "timer": Timer,
        "card": Card,
        "computer-opponent": ComputerOpponent
    }
    
}    
</script>

<style>
    #game-board {
        width: 85vw;
        height: 75vh;
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
