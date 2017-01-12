<template>
  <div class="verticalheight">
    <div class="item">
      <div class="portrait"> 
          <img src="http://img.sccnn.com/bimg/339/01210.jpg">
      </div>
      <div class="userinfor">
        <div class="name">
          陈大选
        </div>
      </div>
    </div>    
    <div class="item distancetop">
      <div class="tit"> 
        <i class="icon iconfont icon-xuanshangpin"></i>
        商品收藏
      </div>
      <div class="open">
        <i class="icon iconfont icon-shangjia"></i>
      </div>
    </div>
    <div class="item">
      <div class="tit"> 
        <i class="icon iconfont icon-shangjia"></i>
        店铺收藏
      </div>
      <div class="open">
        <i class="icon iconfont icon-shangjia"></i>
      </div>
    </div>    
    <router-link class="item distancetop"  :to="{name:'documents'}" tag="div" > 
      <div class="tit"> 
        <i class="icon iconfont icon-waibudanju"></i>
        外部单据
      </div>
      <div class="open">
        <i class="icon iconfont icon-shangjia"></i>
      </div>
    </router-link>        
     <router-link class="item distancetop" :to="{name: 'about'}" tag="div">
      <div class="tit"> 
        <i class="icon iconfont icon-guanyu"></i>
        关于蚁管家
      </div>
      <div class="open">
        <i class="icon iconfont icon-shangjia"></i>
      </div>
    </router-lin>    
  </div>
</template>

<script>
export default {
  name: 'Personalcenter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
@import "../assets/scss/personalcenter.scss"; 
.verticalheight{
  padding-top:px2rem(22px) 
}
</style>
