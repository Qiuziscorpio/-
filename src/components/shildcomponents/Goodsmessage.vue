<template>
  <div>
    <div class="panel-B">
      <div class="panel-B-head">
        <div class="tit">
          <span class="text-rose" v-if="goodsmessagedata.IsPromo===true">[促销] {{goodsmessagedata.Title}}</span>
          <span class="text-blue" v-else-if="goodsmessagedata.IsNew===true">[新品] {{goodsmessagedata.Title}}</span>
          <span v-else> {{goodsmessagedata.Title}}</span>
        </div>
        <div class="label">
          <div class="num" v-if="promosdata!=undefined">
            <span class="current"> ¥ {{promosdata.PromoPrice}}</span>
            <span class="original"> ¥ {{goodsmessagedata.Price}}  </span>
          </div>
          <div class="num" v-else>
            <span class="current text-yellow" :class="{'text-rose':goodsmessagedata.IsPromo===true}">  ¥ {{goodsmessagedata.Price}} </span>
          </div>
          <i style="opacity: 0;position: absolute;"> {{is}}</i>
<div class="collect" v-on:click="cancelstore(goodsmessagedata.Id)" v-if="goodsmessagedata.IsFav==true ">
  <i class="icon iconfont icon-yishoucang"></i> 取消收藏
</div>
<div class="collect" v-on:click="addstore(goodsmessagedata.Id)" v-else>
  <i class="icon iconfont icon-weishoucang"></i> 收藏商品
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
    props: {
      goodsmessagedata: "",
      descriptiondata: "",
      promosdata: "",
      supplierdata: ""
    },
    data() {
      return {
        is: ""
      }
    },
    methods: {
      store: function (_sel, type, storeid, isfav) {
        let token = localStorage.getItem("token")
        _sel.$http.get(this.api + '/Product/' + type + '?token=' + token + '&productId=' + storeid).then((response) => {
          this.is = isfav
          _sel.goodsmessagedata.IsFav = this.is
        }, (response) => {
          console.log('出错啦')
        })
      },
      //取消商品收藏
      cancelstore: function (id) {
        let _sel = this
        _sel.store(this, "CancelFavor", id, false)
      },
      //添加商品收藏
      addstore: function (id) {
        let _sel = this
        _sel.store(this, "AddFavor", id, true)
      }
    },
    mounted() {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/scss/panel-B.scss"; 

</style>