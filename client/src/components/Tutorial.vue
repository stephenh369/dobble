<template>
  <div id="tutorial">
    <div id="tutorial-heading-div">
      <img id="tutorial-logo" src="../assets/dobble.png" alt="dobble-logo"/>
      <h2 id="tutorial-heading">Tutorial</h2>
    </div>
    <div id="tutorial-p-div">
      <p class="tutorial-p">
        This is a single-player, browser game adaptation of the popular card game Dobble!
        Dobble (also known as Spot it!) is a simple pattern recognition game in which players try to find
        an image shown on two cards.
      </p>
      <p class="tutorial-p">
        In our version of the game, <strong>two</strong> cards will appear on screen that will feature <strong>six</strong> different symbols.
        Any two cards have exactly one symbol in common. <span id="match-span">Match</span> the common symbols by clicking on the matching symbol on each card.
      </p>
      <p class="tutorial-p">
        If you guess correct you will score <strong>one</strong> point, and the game will give you a new combination of cards.
        If you are incorrect or misclick, just select a different pair of symbols!
        You also have a <span id="time-limit-span">time limit</span>, so answer as quickly as possible for the best score!
      </p>
      <button id="tutorial-bk-btn" class="btn" v-on:click="mainMenu">Got it!</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  methods: {
    mainMenu () {
      eventBus.$emit("main-menu");  // to App
    }
  }
}
</script>

<style scoped>
  #tutorial {
    background-color: rgb(141, 83, 141);
    width: 100vw;
    height: 100%;
  }
  #tutorial-heading-div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 10px;
  }
  #tutorial-logo {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }
  #tutorial-p-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .tutorial-p {
    width: 75vw;
    max-width: 720px;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid black;
    border-radius: 15px;
    background-color: rgba(200, 200, 200, 0.25);
  }
  #match-span {
    color: rgb(110, 2, 110);
  }
  #time-limit-span {
    color: rgb(180, 14, 14);
  }

</style>
