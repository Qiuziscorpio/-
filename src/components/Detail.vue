<template>
  <div>
    <!--搜索条-->
    <searchbar></searchbar>
    <div>
      详情页
    <div>
  </div>
</template>

<script>
//搜索条
import searchbar from 'components/shildcomponents/Searchbar.vue'
//商品列表
import GoodsList from 'components/shildcomponents/GoodsList.vue'
export default {
  name: 'detail',
  components:{
    searchbar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
