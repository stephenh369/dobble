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
    display: flex;
    width: 50%;
    margin: 0 auto;
    justify-content: space-evenly;
    align-items: center;
    color: black;
}

</style>
