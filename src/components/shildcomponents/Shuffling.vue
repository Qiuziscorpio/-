<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="data in lazyimg" v-if="shufflingdata.length=='0'">
        <img v-bind:src="data.img" @error="setErrorImg" />
      </mt-swipe-item>
      <mt-swipe-item v-for="data in shufflingdata" else>
        <img v-bind:src="data.CoverImg" @error="setErrorImg" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: 'shuffling',
    components: {
    },
    props: {
      shufflingdata: ""
    },
    data() {
      return {
        lazyimg: [
          { "img": "lazyimg" },
          { "img": "lazyimg" },
          { "img": "lazyimg" }
        ]
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../assets/scss/shuffing.scss"; 

</style>