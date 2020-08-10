<template>
    <div>
        <div>{{score.name}}</div>
        <div>{{score.score}}</div>

    </div>
  
</template>

<script>

export default {
    name: 'score',
    props: ['score']


}
</script>

<style>

</style>