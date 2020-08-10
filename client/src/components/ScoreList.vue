<template>
  
</template>

<script>
import ScoreService from '../services/ScoreService';

export default {
    name: 'score-list',
    data() {
        return {
            scores: []
        }
    },
    mounted() {
        ScoreService.getScores()
            .then(scores => this.scores = scores);
    }

}
</script>

<style>

</style>