<template>
  <div>
    <div v-on:key="keydata($event)">
      <!--搜索条-->
      <searchbar :placeholder="value"></searchbar>
      <goodslist :datalist="productdata"></goodslist>
    </div> 
  </div>
</template>

<script>
//搜索条
import searchbar from 'components/shildcomponents/Searchbar.vue'
//商品列表
import goodslist from 'components/shildcomponents/GoodsList.vue'
export default {
  name: 'list',
  components:{
    searchbar,
    goodslist
  },
  data () {
    return {
      productdata:{},   
      value:"" 
    }
  },
  methods:{   
    get:function(_sel,listapi,listid){
            let token=localStorage.getItem("token")
            _sel.$http.get(this.api+'/'+ listapi+'/List/'+listapi+'?token='+token+'&kind='+listid).then((response) => {   
                // 普通商品           
                if(listid==="1"){
                  _sel.productdata=response.body.data
                  _sel.productdata.map(function(item){
                      item.routername ="detail";
                  })                   
                  _sel.value="搜索商品/新品/促销/商家"
                }          
                if(listid==="2"){
                    _sel.productdata=response.body.data
                    _sel.productdata.map(function(item){
                        item.routername ="detail";
                    })                    
                    _sel.value="搜索新品"
                    console.log("请求的是新品")
                }
                if(listid==="3"){                
                    _sel.productdata=response.body.data
                    _sel.productdata.map(function(item){
                        item.routername ="detail";
                    })                    
                    console.log("请求的是促销品")
                     _sel.value="搜索促销品"
                }                                  
            },(response) => {
                console.log('出错啦')
            })            
    }
  },
  watch:{
      '$route' (to,from) {
          this.get(this,to.params.type,to.params.id) 
      }
  },  
  mounted(){
    let _sel=this
    let listid=_sel.$route.params.id
    let listapi=_sel.$route.params.type
    let token=localStorage.getItem("token")
    //请求列表数据
    if(listapi){
        // 普通商品
        if(listapi==="Product"){
            _sel.$http.get(this.api+'/'+ listapi+'/List/'+listapi+'?token='+token+'&kind='+listid).then((response) => {   
                // 普通商品           
                if(listid==="1"){
                  _sel.productdata=response.body.data
                  _sel.productdata.map(function(item){
                      item.routername ="detail";
                  })                   
                  _sel.value="搜索商品/新品/促销/商家"
                }          
                if(listid==="2"){
                    _sel.productdata=response.body.data
                    _sel.productdata.map(function(item){
                        item.routername ="detail";
                    })                    
                    _sel.value="搜索新品"
                    console.log("请求的是新品")
                }
                if(listid==="3"){                
                    _sel.productdata=response.body.data
                    _sel.productdata.map(function(item){
                        item.routername ="detail";
                    })                    
                    console.log("请求的是促销品")
                     _sel.value="搜索促销品"
                }                                  
            },(response) => {
                console.log('出错啦')
            })
        }
        // 供应商列表
        if(listapi==="Supplier"){
             _sel.$http.get(this.api+'/'+ listapi+'/List/?token='+token).then((response) => {     
                _sel.productdata=response.body.data    
                _sel.productdata.map(function(item){
                    item.labelico ="ren";
                    item.routername ="supplierdetail";
                })
                _sel.value="搜索供应商"                                    
            },(response) => {
                console.log('出错啦')
            })    
        }
 
    }   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
