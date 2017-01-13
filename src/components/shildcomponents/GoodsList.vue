<template>
<div>
  <div class="flex-row xs"> 
      <router-link  tag="a" class="flex-grid flex-grid3" :to="{ path:'/'+data.routername+'/'+data.Id}" v-for="data in searchdata" v-if="!data.store">
          <div class="panel">           
            <div class="panel-img">
              <img v-bind:src="data.CoverImg" v-lazy="data.CoverImg">
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
              <div class="num  text-rose"  v-if="data.IsPromo===true">
                ¥ {{data.Price}}
              </div>          
            </div>
          </div>   
      </router-link>
      <div class="flex-grid flex-grid3 shade"  v-for="data in searchdata" v-if="data.store=='store'">
          <div class="panel">           
            <div class="panel-img">
              <img v-bind:src="data.CoverImg" v-lazy="data.CoverImg">
              <div class="panel-shade"> </div>
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
              <div class="num  text-rose"  v-if="data.IsPromo===true">
                ¥ {{data.Price}}
              </div>          
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
  props:{
    datalist:""
  },
  data () {
    return {
      key:"",
      showlist:[],
      itemlist:[]
    }
  },
  methods: {    
    keydata:function(val){  
          let _sel=this   
          _sel.key=val        
    }			
  },  
  computed: {
      //关键字筛选
      searchdata: function() {
        let _sel=this  
        if (_sel.key) {
          return _sel.datalist.filter(function(item) {
            return Object.keys(item).some(function(key) {
                if(item.Title){
                    return String(item.Title).indexOf(_sel.key) > -1
                }
                if(item.Name){
                    return String(item.Name).indexOf(_sel.key) > -1
                }               
            })
          })
        }
        return this.datalist;
      }    
  },
  mounted() {
    this.$root.$on('key',this.keydata)	
    console.log("重新加载了")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
 @import "../../assets/scss/panel.scss"; 
</style>
