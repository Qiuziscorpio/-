<template>
  <div class="verticalheight">
    <div class="item">
      <div class="portrait"> <img v-bind:src="user.picture" @error="setErrorImg"></div>
      <div class="userinfor">
        <div class="name">
          {{user.name}}
        </div>
      </div>
    </div>    
    <router-link class="item distancetop" :to="{name:'store',params:{type:'Product',id:'store'}}" tag="div" >
      <div class="tit"> 
        <i class="icon iconfont icon-xuanshangpin"></i>
        商品收藏
      </div>
      <div class="open">
        <i class="icon iconfont icon-you"></i>
      </div>
    </router-link>
     <router-link class="item"  :to="{name:'store',params:{type:'Supplier',id:'store'}}" tag="div" > 
      <div class="tit" > 
        <i class="icon iconfont icon-shangjia"></i>
        店铺收藏
      </div>
      <div class="open">
        <i class="icon iconfont icon-you"></i>
      </div>
    </router-link>   
    <router-link class="item distancetop"  :to="{name:'documents'}" tag="div" > 
      <div class="tit"> 
        <i class="icon iconfont icon-waibudanju"></i>
        外部单据
      </div>
      <div class="open">
        <i class="icon iconfont icon-you"></i>
      </div>
    </router-link>        
     <router-link class="item distancetop" :to="{name: 'about'}" tag="div">
      <div class="tit"> 
        <i class="icon iconfont icon-guanyu"></i>
        关于蚁管家
      </div>
      <div class="open">
        <i class="icon iconfont icon-you"></i>
      </div>
    </router-lin>    
  </div>
</template>

<script>
export default {
  name: 'Personalcenter',
  data () {
    return {
       user:{
         name:"",
         picture:""
       }
    }
  },
  mounted(){
      let _sel=this
      //获取用户信息
      let username=localStorage.getItem("username")
      let userpicture=localStorage.getItem("userpicture")
      _sel.user.name=username
      _sel.user.picture=userpicture
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
