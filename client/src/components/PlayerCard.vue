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
      'symbol': Symbol
    }

}
</script>


<style>

</style>