<template>
  <div id="timer">
    Time left: <span class="time-limit-span">{{this.timeRemaining}}</span>
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  data () {
    return {
      timeLimit: 60,  // round time limit in seconds
      timeRemaining: null  // time remaining on this round
    };
  },

  methods: {
    runTimer () {

      // function which is called at every timer interval
      const timer = setInterval(() => {

        // decrement time remaining
        this.timeRemaining -= 1;

        // when timer hits 0, stop the clock and send event bus for "time-up"
        if (this.timeRemaining === 0) {
          clearInterval(timer)  // stops the clock
          eventBus.$emit("time-up")  // to GameBoard
        }

      // when main-menu event is received (from GameBoard), stop timer
      eventBus.$on("main-menu", () => {
        clearInterval(timer);
      });

      }, 1000);  // interval is in ms (so 1000 ms = 1 s)
      
    }

  },

  mounted () {
    this.timeRemaining = this.timeLimit;

    this.runTimer()
  }

}
</script>

<style>
  #timer {
    font-size: 24;
    color: white;
  }
</style>
