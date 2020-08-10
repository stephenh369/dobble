<template>
  <div class="symbol-div" v-if="playerCard">
    <card-symbol class="symbol" 
                 v-for="(oneSymbol, index) of playerCard.symbols" 
                 v-on:click.native="handleClick(oneSymbol)" 
                 :cardSymbol="oneSymbol" 
                 :key="index" />
  </div>
</template>

<script>
    import { eventBus } from "@/main.js";
    import CardSymbol from './Symbol.vue'
    export default {
      name: 'player-card',
      data () {
        return {
          selectedSymbol: null
        }
      },
      props: ['playerCard'],
      components: {
        'card-symbol': CardSymbol
      },
      methods: {
        handleClick(clickedSymbol) {
          console.log("click detected");
          this.selectedSymbol = clickedSymbol;
          eventBus.$emit('symbol-selected', this.selectedSymbol);
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
</style>
