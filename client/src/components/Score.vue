<template>
    <div>
        <div class="score-item">{{score.name}}</div>
        <div class="score-item">{{score.score}}</div>

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
    color: #FFFFFF;
}

</style>