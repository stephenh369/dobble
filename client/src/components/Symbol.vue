<template>
  <div>
      <button v-on:click="handleClick">{{ cardSymbol }}</button>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: 'symbol',
    props: ['cardSymbol'],
    methods: {
        handleClick() {
            eventBus.$emit('symbol-selected', this.cardSymbol)
        }
    }

}
</script>

<style>

</style>