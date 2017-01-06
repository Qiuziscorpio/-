<template>
  <div >
    <!--搜索-->
    <div class="index-search">
      <div class="search">
        <span class="magnify"><i class="icon iconfont icon-sousuo"></i></span> 
        <input class="input" placeholder="搜索商品/新品/促销/商家"> 
        <span class="scan"><i class="icon iconfont icon-saoyisao"></i></span> 
      </div>      
    </div>
    <!--轮播图-->
    <shuffling></shuffling>
    <navmenu></navmenu>
    <!--商品列表-->
    <goodslist></goodslist>
  </div>
</template>

<script>

//轮播图
import shuffling from 'components/shildcomponents/shuffling.vue'
//导航菜单
import navmenu from 'components/shildcomponents/nav.vue'
//商品列表
import goodslist from 'components/shildcomponents/GoodsList.vue'

export default {
  name: 'index',
  components:{
    shuffling,
    navmenu,
    goodslist
  },
  data () {
    return {
    }
  },
  mounted (){
      // this.$http.get(this.api+'/Mall/Index',{Token:"12344"}).then((response) => {
      //   console.log(response)
      // }, (response) => {
      //   console.log('出错啦')
      // })
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
