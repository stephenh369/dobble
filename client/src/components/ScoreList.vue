<template>
  <div>
      <score v-for="(score, index) in sortedScores" :score="score" :key="index" ></score>
      <button class="btn" v-on:click="mainMenu">Main menu</button>
      <button class="btn" v-on:click="resetScores">Reset Scores</button>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import ScoreService from '../services/ScoreService';
import Score from './Score'

export default {
    name: 'score-list',

    data() {
        return {
            scores: []
        }
    },

    methods: {
        mainMenu () {
            eventBus.$emit("main-menu");  // to App
        },

        // to delete the score list
         resetScores() {
             ScoreService.resetScores();
             this.scores = [];
        }
    },
    
    computed: {
        sortedScores() {
            const sorted = this.scores.sort(function(a,b) {
                return b.score - a.score; 
            })
            return sorted;
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
