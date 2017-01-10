<template>
  <div>
    <!--个人中心-->
    <user></user>    
    <!--图片轮播图-->
    <shuffling :shufflingdata="shufflingdata"></shuffling>
    <!--商品信息-->
    <goodsmessage :goodsmessagedata="goodsmessagedata"></goodsmessage>
     <!--联系模块-->
    <contact :contact="contactdata"></contact>   
    <!--标题-->
    <headline :headline="producttit"></headline>
    <!--推荐商品-->
    <GoodsList :datalist="productdata"></GoodsList>
  </div>
</template>

<script>
//个人中心
import user from 'components/shildcomponents/User.vue'
//轮播图
import shuffling from 'components/shildcomponents/Shuffling.vue'
//商品信息
import goodsmessage from 'components/shildcomponents/Goodsmessage.vue'
//联系模块
import contact from 'components/shildcomponents/Contact.vue'
//商品标题
import headline from 'components/shildcomponents/Headline.vue'
//商品列表
import GoodsList from 'components/shildcomponents/GoodsList.vue'
export default {
  name: 'detail',
  components:{
    user,
    shuffling,
    goodsmessage,
    contact,
    headline,
    GoodsList
  },
  data () {
    return {
      shufflingdata:{},  
      productdata:{},
      contactdata:{},
      goodsmessagedata:{},
      producttit:[{
        icontype:"icon-xuanshangpin text-yellow",
        tittype:"推荐商品"
      }]         
    }
  },
  mounted(){
        let _sel=this
       // let apiid=_sel.$route.params.id
        //模拟数据
        let apiid="123456"
        let token=localStorage.getItem("token")
        // 请求详情页数据
        _sel.$http.get(this.api+'/Product/Info/'+apiid,{Token:token}).then((response) => {
            //轮播图数据   
             _sel.shufflingdata=response.body.data.ProductImgs  
            //商品信息
             _sel.goodsmessagedata=response.body.data.Product
             _sel.goodsmessagedata.IsFav=response.body.data.IsFav
             _sel.goodsmessagedata.descriptiondata=JSON.parse(response.body.data.Product.Description)
             
            console.log(  _sel.goodsmessagedata.descriptiondata)  


             
            //供应商数据
            _sel.contactdata=response.body.data.Supplier
            _sel.contactdata.routername="supplierdetail"
            console.log("请求成功啦")
        }, (response) => {
             console.log('出错啦')
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
