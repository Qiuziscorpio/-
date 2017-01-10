<template>
  <div class="verticalheight">
    <!--搜索-->
    <searchbar></searchbar>
    <!--日期控件-->
    <div>
      
    <div>  
    <!--单据列表-->  
    <documentslist></documentslist>
  </div>
</template>

<script>
//搜索条
import searchbar from 'components/shildcomponents/Searchbar.vue'
//外部单据
import documentslist from 'components/shildcomponents/Documentslist.vue'
//单据列表
export default {
  name: 'search',
  components:{
    searchbar,
    documentslist
  },  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
