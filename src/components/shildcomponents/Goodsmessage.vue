<template>
<div>
  <div class="panel-B">
    {{goodsmessagedata.descriptiondata}}
    <div class="panel-B-head">
      <div class="tit">
        <span class="text-rose" v-if="goodsmessagedata.IsNew===false">[促销]</span> {{goodsmessagedata.Title}}
      </div>
      <div class="label">
        <div class="num">
          <span class="current"> ¥{{goodsmessagedata.Price}}</span>
          <span class="original"> ¥ {{goodsmessagedata.Price}}  </span>
        </div>
        <div class="collect" v-if="goodsmessagedata.IsFav===true ">
          <i class="icon iconfont icon-yishoucang" ></i> 收藏
        </div>
        <div class="collect" v-else>
          <i class="icon iconfont icon-weishoucang"></i> 收藏
        </div>        
      </div>
    </div>
    <div class="panel-B-content">
      <ul class="param">
        <li class="param-list">
          时间 <span>2015-5-12</span>
        </li>
        <li class="param-list">
          品牌 <span> </span>
        </li>
        <li class="param-list">
          条码 <span>{{goodsmessagedata.BarCode}}</span>
        </li>
        <li class="param-list">
          厂家 <span>69292880008</span>
        </li>
        <li class="param-list">
          其他 <span> {{goodsmessagedata.descriptiondata.other}} </span>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>


<script>
  export default {
    name: 'goodsmessage',
    props:{
      goodsmessagedata:""
    },    
    data() {
      return {        
      }
    },    
    mounted() {
    }  
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
 @import "../../assets/scss/panel-B.scss"; 

</style>