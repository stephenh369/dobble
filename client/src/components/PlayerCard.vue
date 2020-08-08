<template>
  <div v-if="playerCard">
    <card-symbol v-for="(oneSymbol, index) of playerCard.symbols" :cardSymbol="oneSymbol" :key="index" />
  </div>
</template>

<script>
    import CardSymbol from './Symbol.vue'
export default {
    name: 'player-card',
    props: ['playerCard'],
    components: {
      'card-symbol': CardSymbol
    }

}
</script>


<style>

</style>