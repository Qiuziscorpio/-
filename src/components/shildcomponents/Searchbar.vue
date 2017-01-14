<template>
  <div class="searchbox">
    <div class="search">
      <span class="magnify"><i class="icon iconfont icon-sousuo"></i></span>
      <input class="input" :placeholder="placeholder" v-model="searchdata" v-on:keyup="keyup">
      <span class="scan" v-if="placeholder!='搜索供应商'&&placeholder!='请输入关键字'&&$route.params.id!='store'"><i class="icon iconfont icon-saoyisao"></i></span>
      <div class="scan"  v-if="$route.params.id=='store'" >
          <span v-on:click="editstore" v-if="state.edit">编辑</span>
          <span v-on:click="offstore"  v-if="state.off">取消</span>
          <span v-on:click="cancelstore"  v-if="state.cancel">删除</span>
      </div>      
    </div>      
  </div>
</template>

<script>
  export default {
    name: 'searchbar',
    props:{
      placeholder:""
    },    
    components:{
    },
    data() {
      return {
        searchdata:"",
        scan:true,
        selectedstatelist:[],
        state:{
          edit:true,
          off:false,
          cancel:false,
          showshade:true,
          hideshade:true
        }
      }
    },
    methods: {   
      keyup:function(){
         this.$root.$emit('key',this.searchdata)
      },
      //编辑 收藏模块 
      editstore:function(){
        this.state.edit=false
        this.state.off=true
        this.$root.$emit('shade',true,false)
      },
      //取消 选择收藏模块  
      offstore:function(){
        this.state.edit=true
        this.state.off=false
        this.$root.$emit('shade',false,true)          
      },  
      //删除 收藏    
      cancelstore:function(){
        let _sel=this
        this.state.edit=true
        this.state.cancel=false   
        this.$root.$emit('deletestore',_sel.selectedstatelist)
      }, 
      //单个收藏模块    选中 未选中  
      selectedlist:function(val,state){ 
         let _sel=this
          _sel.state.off=false
          _sel.state.cancel=true    
          //选择
          if(state===true){
            _sel.selectedstatelist.push(val)
          } 
          //取消选中
          if(state===false){
            _sel.selectedstatelist.map(function(item,index){
                if(item==val){            
                    _sel.selectedstatelist.splice(_sel.selectedstatelist[index],1)

                }               
            })          
          }                  
      }           
    },    
    mounted() {
      this.$root.$on('selected',this.selectedlist)	
    }    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
  @import "../../assets/scss/searchbar.scss"; 
 
</style>