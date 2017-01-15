<template>
  <div class="verticalheight">
    <!--日期控件-->
    <datetpicker></datetpicker>    
    <!--搜索-->
     <searchbar :placeholder="value"></searchbar>
    <!--单据列表-->  
    <documentslist :documents="searchdata" :msg="msgdata"></documentslist>
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
      msgdata:{},
      key:"",
    }
  },
  computed:{
      //关键字筛选
      searchdata: function() {
        let _sel=this  
        let listid=_sel.$route.params.id
        let listapi=_sel.$route.params.type
        let token=localStorage.getItem("token")        
        if (_sel.key) {
            //搜索列表单据
        }
        return this.documentsdata;
      } 
  },
  methods:{
    keydata:function(val){  
          let _sel=this   
          _sel.key=val        
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

    //搜索
    this.$root.$on('key',this.keydata)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
