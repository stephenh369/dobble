<template>
  <div>
    <card-symbol v-for="(symbol, index) of playerCard.symbols" :cardSymbol="symbol" :key="index" />
  </div>
</template>

<script>
    import Symbol from './Symbol.vue'
export default {
    name: 'player-card',
    props: ['playerCard'],
    components: {
      'card-symbol': Symbol
    }

}
</script>


<style>

</style>