<template>
  <ul>
  <symbol></symbol>
  </ul>
</template>

<script>
    import Symbol from '.Symbol.vue'
export default {
    name: 'card',
    props: ['card'],
    components: {
      'symbol': Symbol
    }

}
</script>


<style>

</style>