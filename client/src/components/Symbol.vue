<template>
    <div>
        <img :src="getImgUrl(cardSymbol)" alt="symbol" />
    </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: 'CardSymbol',

    props: ['cardSymbol'],

    methods: {
        // returns path to symbol image based on standard path + name 
        getImgUrl(symbol) {
            return require('../assets/'+symbol+'.png');
        }
    }

}
</script>

<style scoped>
    img {
        width: 20px;
        height: 20px;
        border-radius: 5px;
    }
    img:hover {
        background-color: rgba(110, 110, 110, 0.2);
    }
    img:active {
        background-color: rgba(117, 1, 117, 0.692);
    }
</style>
