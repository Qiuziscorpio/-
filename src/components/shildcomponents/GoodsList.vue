<template>
<div>
  <div class="flex-row xs">
    <div class="flex-grid flex-grid3" v-for="data in showlist">
      <div class="panel">
        <div class="panel-img">
          <img :src="data.CoverImg">
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
          return _sel.showlist.filter(function (item) {
                if (item.Title.indexOf(_sel.key)>-1){
                    console.log(item)
                    console.log(_sel.itemlist.unshift(item))
                    //return _sel.showlist=_sel.itemlist.push(item)          
                }   
          })          
    }    			
  },  
  computed: {
  },
  mounted() {
    this.$root.$on('key',this.keydata)	
    let _sel=this
    setTimeout(function(){
      _sel.showlist=_sel.datalist
    },500)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
 @import "../../assets/scss/panel.scss"; 
</style>
