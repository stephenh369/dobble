<template>
  <ul>
  <symbol></symbol>
  </ul>
</template>

<script>
    import Symbol from '.Symbol.vue'
export default {
    name: 'opponent-card',
    props: ['opponentCard'],
    components: {
      'symbol': Symbol
    }

}
</script>


<style>

</style>