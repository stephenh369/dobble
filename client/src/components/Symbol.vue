<template>
  <div>
      <button class="btn-card" v-on:click="handleClick">{{ cardSymbol }}</button>
    </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: 'CardSymbol',
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