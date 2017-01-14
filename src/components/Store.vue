<template>
  <div>
    <div v-on:key="keydata($event)">
      <!--搜索条-->
      <searchbar :placeholder="value"></searchbar>
      <!--商品列表-->
      <goodslist :datalist="productdata"></goodslist>
    </div> 
  </div>
</template>

<script>
//搜索条
import searchbar from 'components/shildcomponents/Searchbar.vue'
//商品列表
import goodslist from 'components/shildcomponents/GoodsList.vue'
//提示框
import { MessageBox } from 'mint-ui';
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
     //是否确定 删除已选收藏  
      delete:function(val){
        let _sel=this
        let storeid= val.join(",")
        let token=localStorage.getItem("token")  
        let listapi=_sel.$route.params.type

        MessageBox.confirm('确定删除?').then(action => {   
          // 删除商品收藏  
          if(listapi==="Product"){
              _sel.$http.get(this.api+'/Product/CancelFavor?token='+token+'&productId='+storeid).then((response) => {   
                  //删除收藏成功 刷新当前页
                  location.reload() 
              },(response) => {
                  console.log('出错啦')
              })
          }
           // 删除商家收藏 
          if(listapi==="Supplier"){
              _sel.$http.get(this.api+'/Supplier/CancelFavor?token='+token+'&supplierId='+storeid).then((response) => {   
                  //删除收藏成功 刷新当前页
                  location.reload() 
              },(response) => {
                  console.log('出错啦')
              })
          }            
        });        
      }
  },
  mounted(){

    this.$root.$on('deletestore',this.delete)	

    let _sel=this
    let listid=_sel.$route.params.id
    let listapi=_sel.$route.params.type
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
<style lang="scss"  >
@import "../assets/scss/popup.scss";

</style>
