<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item> 
        <img v-bind:src="img"/>
      </mt-swipe-item>
      <mt-swipe-item>
         <img v-bind:src="img"/>
      </mt-swipe-item>
      <mt-swipe-item>
         <img v-bind:src="img"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import "../../assets/scss/shuffing.css"; 
import img from '../../assets/img/index/1.jpg'
export default {
  name: 'shuffling',
  components:{
  },
  data () {
    return {
      img:img
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
