<template>
  <div class="flex-row xs">
    <router-link tag="a" class="flex-grid flex-grid3" :to="{ path:'/'+data.routername+'/'+data.Id}" v-for="data in datalist"
      v-if="state.hideshade">
      <div class="panel">
        <div class="panel-img">
          <img v-bind:src="data.CoverImg" @error="setErrorImg">
          <div class="panel-radius">
            <div class="panel-radius-icon bg-blue" v-if="data.IsNew===true">
              <i class="icon iconfont icon-xinpin1"></i>
            </div>
            <div class="panel-radius-icon bg-rose" v-if="data.IsPromo===true">
              <i class="icon iconfont icon-cuxiao1"></i>
            </div>
          </div>
          <div class="panel-content">
            <div class="tit" v-if="data.labelico==='ren'">{{data.Name}}</div>
            <div class="tit" v-else>{{data.Title}}</div>
            <div class="num text-yellow" v-if="data.IsPromo===false">
              ¥ {{data.Price}}
            </div>
            <div class="num  text-rose" v-if="data.IsPromo===true">
              ¥ {{data.Price}}
            </div>
          </div>
        </div>
    </router-link>
    <div class="flex-grid flex-grid3 shade" v-for="data in datalist" v-if="state.showshade" v-on:click="storeselected(data.Id,data.selecte,data.uncheck,$event)">
      <div class="panel">
        <div class="panel-img">
          <img v-bind:src="data.CoverImg" v-lazy="data.CoverImg">
          <div class="panel-shade" data-shade="true"> </div>
          <div class="panel-radius">
            <div class="panel-radius-icon bg-blue" v-if="data.IsNew===true">
              <i class="icon iconfont icon-xinpin1"></i>
            </div>
            <div class="panel-radius-icon bg-rose" v-if="data.IsPromo===true">
              <i class="icon iconfont icon-cuxiao1"></i>
            </div>
          </div>
        </div>
        <div class="panel-content">
          <div class="tit" v-if="data.labelico==='ren'">{{data.Name}}</div>
          <div class="tit" v-else>{{data.Title}}</div>
          <div class="num text-yellow" v-if="data.IsPromo===false">
            ¥ {{data.Price}}
          </div>
          <div class="num  text-rose" v-if="data.IsPromo===true">
            ¥ {{data.Price}}
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  import img from '../../assets/img/goodr/shangpin2.jpg'
  export default {
    name: 'goodslist',
    props: {
      datalist: ""
    },
    data() {
      return {
        showlist: [],
        itemlist: [],
        stateselected: {
          selecte: false,
          uncheck: true
        },
        state: {
          showshade: false,
          hideshade: true
        }
      }
    },
    methods: {
      //显示 隐藏    删除收藏模块
      stateshade: function (show, hide) {
        let _sel = this
        _sel.state.showshade = show
        _sel.state.hideshade = hide
        if (show === true) {
          _sel.datalist.map(function (item) {
            item.selecte = false
            item.uncheck = true
          })
        }
      },
      //单个收藏模块    选中 未选中    
      storeselected: function (id, selecte, uncheck, event) {
        // 选中
        if (event.srcElement.dataset.shade) {
          if (event.target.style.display = " ") {
            event.target.style.display = "none"
            this.$root.$emit('selected', id, true)
            return
          }
          return
        }
        //未选中  
        if (typeof (event.srcElement.dataset.shade) == "undefined") {
          event.srcElement.nextElementSibling.style.display = "block"
          this.$root.$emit('selected', id, false)
          return
        }
      }
    },
    mounted() {
      this.$root.$on('shade', this.stateshade)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/scss/panel.scss"; 

</style>