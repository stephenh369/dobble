<template>
  <div v-if="opponentCard">
      <card-symbol v-for="(oneSymbol, index) of opponentCard.symbols" :cardSymbol="oneSymbol" :key="index" />
  </div>
</template>

<script>
    import CardSymbol from './Symbol.vue'
export default {
    name: 'opponent-card',
    props: ['opponentCard'],
    components: {
      'card-symbol': CardSymbol
    }

}
</script>


<style>

</style>