<template>
  <div id="timer">
    {{this.timeRemaining}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      timeLimit: 30,
      timeRemaining: null  // round time limit in seconds
    };
  },

  methods: {
    runTimer () {
      let timeRemaining = this.timeRemaining;
      console.log('timeRemaining :>> ', timeRemaining);

      const tick = setInterval(() => {
        timeRemaining -= 1;
        this.timeRemaining = timeRemaining;
        console.log('timeRemaining :>> ', timeRemaining);
      }, 1000);

      

    }
  },

  mounted () {
    this.timeRemaining = this.timeLimit;

    this.runTimer()
  }

}
</script>

<style>

</style>
