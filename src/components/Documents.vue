<template>
  <div class="verticalheight">
    <!--日期控件-->
    <datetpicker></datetpicker>    
    <!--搜索-->
     <searchbar :placeholder="value"></searchbar>
    <!--单据列表-->  
    <documentslist :documents="documentsdata" :msg="msgdata"></documentslist>
  </div>
</template>

<script>
//搜索条
import searchbar from 'components/shildcomponents/Searchbar.vue'
//日期控件
import datetpicker from 'components/shildcomponents/Datepicker.vue'
//外部单据
import documentslist from 'components/shildcomponents/Documentslist.vue'
//单据列表
export default {
  name: 'search',
  components:{
    searchbar,
    datetpicker,
    documentslist
  },  
  data () {
    return {
      value: '请输入关键字',
      documentsdata:{},
      msgdata:{}
    }
  },
  mounted(){
    let _sel=this
    let token=localStorage.getItem("token")
    _sel.$http.post(this.erpapi+'/EnterpriseOrder/MyOrders',
        {"token":token,"kind":"30,31,32,33,34,35,36,37,38,39"}
    ).then((response) => {
        _sel.documentsdata=response.data.data
        response.data.data.map(function(obj,index){
          return  _sel.msgdata=JSON.parse(obj.MsgData)
        })    
    }, (response) => {
        console.log("出错了")
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
