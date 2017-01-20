<template>
  <div>
    <div class="flex-row">
      <div class="flex-grid">
        <router-link :to="{name:'list',params:{type:'Product',id:'1'}}" tag="div" class="nav-radius">
          <div class="nav-icon bg-yellow">
            <i class="icon iconfont icon-xuanshangpin"></i>
          </div>
          商品
        </router-link>
      </div>
      <div class="flex-grid">
        <router-link :to="{name:'list',params:{type:'Product',id:'2'}}" tag="div" class="nav-radius">
          <div class="nav-icon bg-blue">
            <i class="icon iconfont icon-icon111"></i>
          </div>
          新品
        </router-link>
      </div>
      <div class="flex-grid">
        <router-link :to="{name:'list',params:{type:'Product',id:'3'}}" tag="div" class="nav-radius">
          <div class="nav-icon bg-rose">
            <i class="icon iconfont icon-lipinicon"></i>
          </div>
          促销
        </router-link>
      </div>
      <div class="flex-grid">
        <router-link :to="{name:'list',params:{type:'Supplier',id:'0'}}" tag="div" class="nav-radius">
          <div class="nav-icon bg-green">
            <i class="icon iconfont icon-shangjia"></i>
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
<style lang="scss" scoped>
@import "../../assets/scss/nav.scss"; 

.flex-row{
  margin:px2rem(20px);
}
.nav-radius{
  margin: px2rem(20px) 0;
}

</style>