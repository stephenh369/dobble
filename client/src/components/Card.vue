<template>
    <ul>
    <symbol></symbol>
    </ul>
</template>

<script>
    import Symbol from './Symbol.vue'
export default {
    name: 'card',
    props: ['card'],
    components: {
      'symbol': Symbol
    }

}
</script>


<style>
  .card {
    display: inline-block;
    width: 150px;
    height: 150px;
    z-index: 2;
    background-color: white;
    border-radius: 50%;
  }
</style>