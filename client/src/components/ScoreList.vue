<template>
  <div>
      <score v-for="(score, index) in scores" :score="score" :key="index" ></score>
  </div>
</template>

<script>
import ScoreService from '../services/ScoreService';
import Score from './Score'

export default {
    name: 'score-list',

    data() {
        return {
            scores: []
        }
    },
    
    mounted() {
        // retrieves scores from database, then sets scores array to retrieved data
        ScoreService.getScores()
            .then(scores => this.scores = scores);
    },

    components: {
        'score': Score
    }
}
</script>

<style>

</style>
