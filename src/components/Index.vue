<template>
  <div >
    <!--个人中心-->
    <user></user>
    <!--搜索-->
    <div class="index-search">
      <div class="search">
        <span class="magnify"><i class="icon iconfont icon-sousuo"></i></span> 
        <input class="input"  v-on:click="search" placeholder="搜索商品/新品/促销/商家" readonly> 
        <span class="scan"  v-on:click="scan"><i class="icon iconfont icon-saoyisao"></i></span> 
      </div>      
    </div>
    <!--轮播图-->
    <shuffling :shufflingdata="shufflingdata"></shuffling>
    <!--导航菜单-->
    <navmenu></navmenu>
    <!--商品列表 商品 新品 促销 商家-->
    <headline :headline="producttit"></headline>
    <goodslist :datalist="productdata"></goodslist>      
    <headline :headline="newproductstit"></headline>
    <goodslist :datalist="newproductsdata"  ></goodslist>            
    <headline :headline="promoproductstit"></headline>
    <goodslist :datalist="promoproductdata"  ></goodslist>
    <headline :headline="supplierstit"></headline>
    <goodslist :datalist="suppliersdata"></goodslist>         
  </div>
</template>

<script>
//个人中心
import user from 'components/shildcomponents/User.vue'
//轮播图
import shuffling from 'components/shildcomponents/Shuffling.vue'
//导航菜单
import navmenu from 'components/shildcomponents/Nav.vue'
//商品列表
import goodslist from 'components/shildcomponents/GoodsList.vue'
//商品标题
import headline from 'components/shildcomponents/Headline.vue'


export default {
  name: 'index',
  components:{
    user,
    shuffling,
    navmenu,
    goodslist,
    headline
  },
  data () {
    return {
      shufflingdata:{},
      producttit:[{
        icontype:"icon-xuanshangpin text-yellow",
        tittype:"商品",
        moreurlname:"list",
        moreurltype:"Product",  
        moreurlid:"1",
        moretit:"更多"
      }],      
      newproductstit:[{
        icontype:"icon-icon111 text-blue",
        tittype:"新品",
        moreurlname:"list",
        moreurltype:"Product",  
        moreurlid:"2",
        moretit:"更多"
      }],       
      promoproductstit:[{
        icontype:"icon-lipinicon text-rose",
        tittype:"促销",
        moreurlname:"list",
        moreurltype:"Product",        
        moreurlid:"3",          
        moretit:"更多"
      }],      
      supplierstit:[{
        icontype:"icon-shangjia text-green",
        tittype:"商家",
        moreurlname:"list",
        moreurltype:"Supplier",  
        moreurlid:"0",        
        moretit:"更多"
      }],
      productdata:{},
      newproductsdata:{},
      promoproductdata:{},
      suppliersdata:{}
    }
  },
  methods:{
    //搜索
    search:function(){
      this.$router.push({name:'search'})
    },
    //扫一扫
    scan:function(){
      console.log("扫一扫")
    }    
  },
  mounted (){
       let _sel=this
       let token=localStorage.getItem("token")
       // 请求首页数据
       _sel.$http.get(this.api+'/Mall/Index',{Token:token}).then((response) => {
            //轮播图列表
            _sel.shufflingdata=response.data.data.Advent
            //商品列表
            _sel.productdata=response.data.data.Product
            _sel.productdata.map(function(item){
                item.routername ="detail";
            })            
            //新品列表
            _sel.newproductsdata=response.data.data.NewProduct  
             _sel.newproductsdata.map(function(item){
                item.routername ="detail";
            })            
            //促销列表
            _sel.promoproductdata=response.data.data.PromoProduct
             _sel.promoproductdata.map(function(item){
                item.routername ="detail";
            })             
            //商家列表
            _sel.suppliersdata=response.data.data.Supplier 
            _sel.suppliersdata.map(function(item){
                item.labelico ="ren";
                item.routername ="supplierdetail";
            })

       }, (response) => {
            console.log('出错啦')
       })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
  @import "../assets/scss/search.scss"; 
  placeholder{
    color: #fff;
  }
  :-ms-input-placeholder {
    color: #fff;
  }
  ::-webkit-input-placeholder {
     color: #fff;
  }
  .index-search{
    width: 100%;
    position: absolute;
    z-index: 9;
    .search{
      margin: px2rem(30px);
      background: rgba(0, 0, 0, 0.4);
    }
    .input{
      border: none;
      background: rgba(0, 0, 0, 0)
    }
  }
</style>
