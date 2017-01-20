<template>
  <div>
    <!--搜索条-->
    <div class="searchbox">
      <div class="search">
        <div class="downmenu">
          <div class="downmenubtn">
            商品 <i class="icon iconfont icon-xia"></i>
          </div>
          <ul class="downmenulist hide">
            <li>商品</li>
            <li>店铺</li>
          </ul>
        </div>
        <span class="magnify right"><i class="icon iconfont icon-sousuo"></i></span>
        <input class="input" placeholder="请输入关键字" v-model="searchdata">
        <span class="scan"><i class="icon iconfont icon-saoyisao"></i></span>
      </div>
    </div>
    <!--热门搜索-->
    <div class="searchhot">
      <div class="searchtit">
        热门搜索
      </div>
      <span class="keyword">雨伞</span>
      <span class="keyword">席子</span>
    </div>
    <!--历史搜索-->
    <div class="searchhot">
      <div class="searchtit">
        历史搜索
      </div>
      <div class="searchhot-item">
        保温杯
      </div>
      <div class="searchhot-item">
        保温杯
      </div>
      <div class="searchhot-item">
        保温杯
      </div>
    </div>
    <!--清楚历史记录-->
    <div>
</template>

<script>
  //搜索条
  export default {
    name: 'search',
    components: {
    },
    data() {
      return {
        searchdata: ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/searchbar.scss"; 

</style>