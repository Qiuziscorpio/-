<template>
  <div>
    <div class="pane-C">
      <div class="panel-C-head">
        <div class="img">
          <img v-bind:src="contact.CoverImg" @error="setErrorImg">
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
        <a class="contact" :href="'tel://'+contact.Phone">
          <i class="icon iconfont icon-dianhua"></i> 联系商家
        </a>
        <div class="shop" v-if="contact.routername==='supplierdetail'">
          <i style="opacity: 0;position: absolute;"> {{is}}</i>
          <span v-on:click="addstore(contact.Id)" v-if="contact.IsFav===false">
            <i class="icon iconfont icon-weishoucang text-yellow"></i>
            收藏店铺
          </span>
          <span v-on:click="cancelstore(contact.Id)" v-else>
            <i class="icon iconfont icon-yishoucang text-yellow" ></i>
            取消收藏
          </span>
          </div>
          <router-link :to="{name:'supplierdetaillist',params:{id:contact.Id}}" tag="a" class="shop" v-else>
            <i class="icon iconfont icon-shangjia text-green"></i> 进入店铺
          </router-link>
        </div>
      </div>
    </div>
</template>


<script>
  export default {
    name: 'contact',
    props: {
      contact: ""
    },
    data() {
      return {
        is: ""
      }
    },
    methods: {
      store: function (_sel, type, storeid, isfav) {
        let token = localStorage.getItem("token")
        _sel.$http.get(this.api + '/Supplier/' + type + '?token=' + token + '&supplierId=' + storeid).then((response) => {
          this.is = isfav
          _sel.contact.IsFav = this.is
          console.log("操作成功了")
        }, (response) => {
          console.log('出错啦')
        })
      },
      //取消商家收藏
      cancelstore: function (id) {
        let _sel = this
        this.store(this, "CancelFavor", id, false)
      },
      //添加商家收藏
      addstore: function (id) {
        let _sel = this
        this.store(this, "AddFavor", id, true)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/scss/panel-C.scss"; 

</style>