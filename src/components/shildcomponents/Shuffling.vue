<template>
<div>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="data in shufflingdata">
      {{data.CoverImg}}
      <img  v-lazy="data.CoverImg"/>
    </mt-swipe-item>
  </mt-swipe>
</div>
</template>

<script>
import "../../assets/scss/shuffing.css"; 
export default {
  name: 'shuffling',
  components:{
  },
  props:{
    shufflingdata:""
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
