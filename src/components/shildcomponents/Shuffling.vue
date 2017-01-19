<template>
<div>

  <mt-swipe :auto="4000">   
    <mt-swipe-item v-for="data in lazyimg" v-if="shufflingdata.length=='0'">
      <img  v-lazy="data.img"/>
    </mt-swipe-item>        
    <mt-swipe-item v-for="data in shufflingdata" else>
      <img  v-lazy="data.CoverImg"/>
    </mt-swipe-item>    
  </mt-swipe>
</div>
</template>

<script>
export default {
  name: 'shuffling',
  components:{
  },
  props:{
    shufflingdata:""
  },
  data(){
    return{
      lazyimg:{
          img:"lazyimg"
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
@import "../../assets/scss/shuffing.scss"; 

</style>
