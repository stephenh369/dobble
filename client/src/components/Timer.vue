<template>
  <div id="timer">
    {{this.timeRemaining}}
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  data () {
    return {
      // TODO change time limit to 30 before going to production
      timeLimit: 5,  // round time limit in seconds
      timeRemaining: null  // time remaining on this round
    };
  },

  methods: {
    runTimer () {
      console.log("starting clock");
      console.log('this.timeRemaining :>> ', this.timeRemaining);

      // function which is called at every timer interval
      const timer = setInterval(() => {

        // decrement time remaining
        this.timeRemaining -= 1;
        console.log('this.timeRemaining :>> ', this.timeRemaining);

        // when timer hits 0, stop the clock and send event bus for "time-up"
        if (this.timeRemaining === 0) {
          console.log("stopping clock");
          clearInterval(timer)  // stops the clock
          eventBus.$emit("time-up")
        }

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
    color:white;
  }
</style>
