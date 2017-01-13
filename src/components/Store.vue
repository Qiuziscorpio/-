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
  },
  
  mounted(){
    let _sel=this
    let listid=_sel.$route.params.id
    let listapi=_sel.$route.params.type
    console.log(_sel.$route.params.type)

    let token=localStorage.getItem("token")
    //请求收藏列表数据
    if(listapi){
        // 商家列表
        if(listapi==="Product"){
             _sel.$http.get(this.api+'/'+ listapi+'/List/?token='+token+'&IsFav=1').then((response) => {     
                _sel.productdata=response.body.data    
                _sel.productdata.map(function(item){
                    item.routername ="detail";
                    item.store ="store";
                })
                _sel.value="商品"                                    
            },(response) => {
                console.log('出错啦')
            })    
        }
        // 供应商列表
        if(listapi==="Supplier"){
             _sel.$http.get(this.api+'/'+ listapi+'/List/?token='+token+'&IsFav=1').then((response) => {     
                _sel.productdata=response.body.data   
                _sel.productdata.map(function(item){
                    item.labelico ="ren";
                    item.routername ="supplierdetail";
                    item.store ="store";
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
