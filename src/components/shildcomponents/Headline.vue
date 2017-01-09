<template>
    <div>
      <div class="headline" v-for="data in headline">
        <div class="tit">
           <i class="icon iconfont" :class="data.icontype"></i><span> {{data.tittype}}</span>
        </div>
        <router-link :to="{ path:data.moreurlname }" tag="div" class="more">
           {{data.moretit}}
        </router-link>        
      </div>
  </div>
</template>
<script>

export default {
  name: 'headline',
  components:{
  },
  props:{
    headline:""
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
  @import "../../assets/scss/headline.scss"; 

</style>
