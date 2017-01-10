<template>
<div>
  <div class="pane-C">
    <div class="panel-C-head">
        <div class="img">
            <img v-bind:src="contact.CoverImg">
        </div>
        <div class="content">
           {{contact.Name}}
            <div class="site">
              <span class="label">
                地址
              </span>
              <span>
                {{contact.Address}}
              </span>
            </div>      
        </div>
    </div>
    <div class="panel-C-content">
        <a class="contact" href="tel://15521293240">         
          <i class="icon iconfont icon-dianhua"></i> 联系商家
        </a>
        <router-link :to="{name:contact.routername,params:{id:contact.Id}}"tag="div" class="shop" v-if="contact.routername===''">
          <i class="icon iconfont icon-weishoucang text-green"></i> 收藏店铺
        </router-link>
        <router-link :to="{name:contact.routername,params:{id:contact.Id}}"tag="div" class="shop" v-else>
          <i class="icon iconfont icon-shangjia text-green"></i> 进入店铺
        </router-link>        
    </div>
  </div>
</div>
</template>


<script>
  export default {
    name: 'contact',
    props:{
      contact:""
    },    
    data() {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
 @import "../../assets/scss/panel-C.scss"; 

</style>