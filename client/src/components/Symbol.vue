<template>
  <div>
      <button v-on:click="handleClick" :symbol="symbol"></button>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: 'symbol',
    props: ['symbol'],
    methods: {
        handleClick: function() {
            eventBus.$emit('symbol-selected',this.symbol)
        }
    }

}
</script>

<style>

</style>