<template>
  <div id="score-list-div">
      <div id="scores-list">
        <h2 id="scores-heading">High Scores</h2>
        <score v-for="(score, index) in scores" :score="score" :key="index" ></score>
        <button id="bk-from-scores-btn" class="btn" v-on:click="mainMenu">Main menu</button>
      </div>
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

<style scoped>
    #score-list-div {
        width: 100vw;
        height: 100vh;
        background-color: rgb(141, 83, 141);
    }
    #scores-list {
        display: grid;
        grid-template-columns: 1fr;
    }
    #scores-heading, #bk-from-scores-btn {
        margin: 15px auto;
    }
</style>
