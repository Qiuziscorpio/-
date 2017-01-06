<template>
  <div>
    <div class="flex-row">
      <div class="flex-grid">
        <div class="nav-radius">
          <div class="nav-icon">
            <i class="icon iconfont icon-xuanshangpin"></i>
          </div> 
          商品
        </div>
      </div>
      <div class="flex-grid">
        <div class="nav-radius">
          <div class="nav-icon">
            <i class="icon iconfont icon-xuanshangpin"></i>
          </div> 
          新品
        </div>
      </div>
      <div class="flex-grid">
        <div class="nav-radius">
          <div class="nav-icon">
            <i class="icon iconfont icon-xuanshangpin"></i>
          </div> 
          促销
        </div>
      </div>
      <div class="flex-grid">
          <router-link :to="{ name: 'search' }" tag="div" class="nav-radius">
            <div class="nav-icon">
              <i class="icon iconfont icon-xuanshangpin"></i>
            </div> 
            商家
          </router-link>
      </div>                  
    <div>
  </div>
</template>


<script>
  export default {
    name: 'nav',
    data() {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
  @import "../../assets/scss/nav.scss"; 

  .flex-row{
    margin-top:px2rem(30px);
  }
  .nav-radius{
    margin: px2rem(30px)
  }

</style>