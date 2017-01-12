<template>
  <div class="searchbox">
    <div class="search">
      <span class="magnify"><i class="icon iconfont icon-sousuo"></i></span>
      <input class="input" :placeholder="placeholder" v-model="searchdata" v-on:keyup="keyup">
      <span class="scan" v-if="placeholder!='搜索供应商'&&placeholder!='请输入关键字'"><i class="icon iconfont icon-saoyisao"></i></span>
    </div>      
  </div>
</template>

<script>
  export default {
    name: 'searchbar',
    props:{
      placeholder:""
    },    
    components:{
    },
    data() {
      return {
        searchdata:"",
        scan:true
      }
    },
    methods: {   
      keyup:function(){
         this.$root.$emit('key',this.searchdata)
      }
    },    
    mounted() {
    }    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
  @import "../../assets/scss/searchbar.scss"; 
 
</style>