<template>
  <ul>
  <symbol></symbol>
  </ul>
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