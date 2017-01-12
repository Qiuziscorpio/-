<template>
  <div>
    <div class="tab">
          <router-link :to="{name:data.tabname,params:{type:data.tabtype,id:data.tabid}}"        class="tabitme" tag="a" v-for="data in tab" >
            {{data.tabtit}}
          </router-link>
     </div>   
  </div>
</template>

<script>
  export default {
    name: 'Tab',
    props:{
      tab:""
    },    
    data() {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
  @import "../../assets/scss/tab.scss"; 


</style>