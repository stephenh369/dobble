<template>
  <div>
      <card-symbol v-for="(symbol, index) of opponentCard.symbols" :cardSymbol="symbol" :key="index" />
  </div>
</template>

<script>
    import Symbol from './Symbol.vue'
export default {
    name: 'opponent-card',
    props: ['opponentCard'],
    components: {
      'card-symbol': Symbol
    }

}
</script>


<style>

</style>