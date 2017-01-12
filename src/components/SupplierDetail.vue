<template>
  <div>
     <!--联系模块-->
    <contact :contact="contactdata"></contact>  
    <tab :tab="tabdata"></tab>
    <router-view></router-view>
  </div>
</template>

<script>
//联系模块
import contact from 'components/shildcomponents/Contact.vue'
//tab切换
import tab from 'components/shildcomponents/Tab.vue'
export default {
  name: 'search',
  components:{
    contact,
    tab
  },
  data () {
    return {
      contactdata:{},
      tabdata:[
        {
          tabname:"supplierdetaillist",
          tabtit:"全部商品",
          tabtype:"detail",
          tabid:"123456abc",
          active:true
        },
        {
          tabname:"supplierdetaillist",
          tabtit:"新品",
          tabtype:"detail",
          tabid:"123456abc",
          active:false
        },
        {
          tabname:"supplierdetaillist",
          tabtit:"促销",
          tabtype:"detail",
          tabid:"123456abc",
          active:false          
        },  
         {
          tabname:"companydata",
          tabtit:"商家信息",
          tabtype:"companydata",
          tabid:"123456abc",
          active:false          
        },                       
      ]
    }
  },
  mounted(){
        let _sel=this
        let dataid=_sel.$route.params.id
        //模拟数据
        let token=localStorage.getItem("token")
        // 请求详情页数据
        _sel.$http.get(this.api+'/Supplier/Info/'+dataid+'?token='+token).then((response) => {  
            //供应商数据
             _sel.contactdata=response.body.data.Supplier
             _sel.contactdata.routername="supplierdetail"

             //关联产品    
        }, (response) => {
             console.log('出错啦')
        })
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped >

</style>
