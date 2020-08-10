<template>
  <div class="symbol-div" v-if="opponentCard">
    <card-symbol 
                 v-for="(oneSymbol, index) of opponentCard.symbols" 
                 v-on:click.native="handleClick(oneSymbol)" 
                 :cardSymbol="oneSymbol" 
                 :key="index"
                 v-bind:class= "selectedSymbol === oneSymbol ? 'selected symbol' : 'symbol' " />
  </div>
</template>

<script>
  import { eventBus } from "@/main.js";
  import CardSymbol from './Symbol.vue'
  
  export default {
    name: 'opponent-card',
    data () {
      return {
        selectedSymbol: null
      }
    },
    props: ['opponentCard'],
    components: {
      'card-symbol': CardSymbol
    },
    mounted() {
      eventBus.$on('guess-over', () => this.selectedSymbol = null);
    },
    methods: {
        handleClick(clickedSymbol) {
          if (this.selectedSymbol === null) {
            this.selectedSymbol = clickedSymbol;
            eventBus.$emit('symbol-selected', this.selectedSymbol);
          } else {
            this.selectedSymbol = clickedSymbol;
            eventBus.$emit('symbol-changed', this.selectedSymbol);
          }
        }
      }

}
</script>


<style scoped>
  .symbol-div {
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;
    align-items: center;
    padding: 20px;
    overflow: hidden;
  }
  .selected {
    border: 1px red solid;
  }
</style>
