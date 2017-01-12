<template>
  <div class="verticalheight">
    <!--搜索-->
     <searchbar :placeholder="value"></searchbar>
    <!--日期控件-->
    <div>
      
    <div>  
    <!--单据列表-->  
    <documentslist :documents="documentsdata"></documentslist>
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
      value: '请输入关键字',
      documentsdata:{},
      msgdata:""
    }
  },
  mounted(){
    let _sel=this
    let token=localStorage.getItem("token")
      _sel.$http({
        url: 'http://api.91ygj.net/EnterpriseOrder/MyOrders',
        method: 'POST',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data:{
          token:token,
          kind: "30,31,32,33,34,35,36,37,38,39"
        }
      }).then(function(response) {
          console.log(response.data)
      }, function(response) {
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
