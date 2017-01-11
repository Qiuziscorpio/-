<template>
<div>
  <div class="panel-B">
    <div class="panel-B-head"> 
      <div class="tit">
        <span class="text-rose" v-if="goodsmessagedata.IsNew===false">[促销]</span> {{goodsmessagedata.Title}}
      </div>
      <div class="label">
        <div class="num" v-if="promosdata!=undefined">
          <span class="current"> ¥ {{promosdata.PromoPrice}}</span>
          <span class="original"> ¥ {{goodsmessagedata.Price}}  </span>
        </div>      
        <div class="num" v-else>
          <span class="current" :class="{'text-rose':goodsmessagedata.IsNew===false,'text-yellow':goodsmessagedata.IsNew===true}">  ¥ {{goodsmessagedata.Price}} </span>
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
        <li class="param-list" v-if="promosdata!=undefined">
           时间 <span>{{promosdata.ExpireOn}}</span>
        </li>
        <li class="param-list">
          品牌 <span>{{descriptiondata.brand}} </span>
        </li>
        <li class="param-list">
          条码 <span>{{goodsmessagedata.BarCode}}</span>
        </li>
        <li class="param-list">
          厂家 <span>{{supplierdata.Name}}</span>
        </li>
        <li class="param-list">
          其他 <span>{{descriptiondata.other}}</span>
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
      goodsmessagedata:"",
      descriptiondata:"",
      promosdata:"",
      supplierdata:""
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