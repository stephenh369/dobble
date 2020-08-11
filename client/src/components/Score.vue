<template>
    <div id="score-item-div">
        <div class="score-item">
            Name: <span class="text-highlight">{{score.name}}</span> 
            Score: <span class="text-highlight">{{score.score}}</span>
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'score',
    props: ['score']
}
</script>

<style scoped>
.score-item {
    display: grid;
    width: 50%;
    max-width: 562px;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    color: black;
}

</style>
