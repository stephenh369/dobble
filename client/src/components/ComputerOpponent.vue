<template>
  
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: 'computer-opponent',

    data() {
        return {
            matchingSymbol: null,
            timeOut: 0
        }
    },

    props: ['leftCard', 'rightCard'],

    mounted() {
        this.createRandomTimeOut();

        // calls the computerWins function at a time specified by timeOut (defined in createRandomTimeOut)
        setTimeout(this.computerWins, this.timeOut);
    },

    methods: {

        // finds the matching symbol between leftCard and rightCard, then assigns it to matchingSymbol
        findMatchingSymbol() {
            const matchingSymbolArray = this.leftCard.symbols.filter(cardSymbol => this.rightCard.symbols.includes(cardSymbol));
            this.matchingSymbol = matchingSymbolArray[0];
        },

        // creates a random timeout between 3 and 8 seconds, then assigns it to timeOut
        createRandomTimeOut() { 
            const randomTimeOut = Math.floor(Math.random() * (8000 - 3000 + 1) + 3000);
            this.timeOut = randomTimeOut;
        },

        // calls the findMatchingSymbol function, then sends eventBus to GameBoard with matchingSymbol 
        computerWins() {
            this.findMatchingSymbol();
            eventBus.$emit("computer-wins", this.matchingSymbol);
        }
    }
}
</script>

<style>

</style>