<template>

<div class="flex-vertical"  v-on:key="keydata($event)">
    <!--搜索条-->
    <searchbar :placeholder="value"></searchbar>
    <!--列表-->
    <div class="flex-vertical-content" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
            <goodslist :datalist="searchdata"></goodslist>
            <!--分页-->
            <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
            <span v-show="bottomStatus === 'loading'">
                <mt-spinner type="snake"></mt-spinner>
            </span>
            </div>            
        </mt-loadmore>
    </div>
</div> 

</template>

<script>
//搜索条
import searchbar from 'components/shildcomponents/Searchbar.vue'
//商品列表
import goodslist from 'components/shildcomponents/GoodsList.vue'
//分页 提示
import { Loadmore,Indicator  } from 'mint-ui';

export default {
  name: 'list',
  components:{
    searchbar,
    goodslist
  },
  data () {
    return {
      productdata:[],   
      searchlist:[],
      value:"" ,
      list:[],
      wrapperHeight: 0,
      bottomStatus: '',
      allLoaded: false,
      pages:0,
      key:"",
    }
  },
  computed: {
      //关键字筛选
      searchdata: function() {
        let _sel=this  
        let listid=_sel.$route.params.id
        let listapi=_sel.$route.params.type
        let token=localStorage.getItem("token")        
        if (_sel.key) {
            //搜索列表数据
            if(listapi){
                // 普通商品
                if(listapi==="Product"){
                    _sel.$http.get(this.api+'/'+ listapi+'/List/'+listapi+'?token='+token+'&Key='+_sel.key+'&kind='+listid).then((response) => {   
                        // 搜索关键字          
                        if(response.body.data.length!=0){
                            // 普通商品           
                            if(listid==="1"){
                                _sel.searchlist=response.body.data
                                _sel.searchlist.map(function(item){
                                    item.routername ="detail";
                                })     
                                _sel.productdata= _sel.searchlist             
                                
                            }          
                            if(listid==="2"){
                                _sel.searchlist=response.body.data
                                _sel.searchlist.map(function(item){
                                    item.routername ="detail";
                                })     
                                _sel.productdata= _sel.searchlist                         
                            }
                            if(listid==="3"){                
                                _sel.searchlist=response.body.data
                                _sel.searchlist.map(function(item){
                                    item.routername ="detail";
                                })     
                                _sel.productdata= _sel.searchlist                     
                            }                            
                        }                            
                    },(response) => {
                        console.log('出错啦')
                    })
                }
                // 供应商列表
                if(listapi==="Supplier"){
                    _sel.$http.get(this.api+'/'+ listapi+'/List/?token='+token+'&Key='+sel.key).then((response) => {     
                        _sel.searchlist=response.body.data    
                        _sel.searchlist.map(function(item){
                            item.labelico ="ren";
                            item.routername ="supplierdetail";
                            _sel.productdata= _sel.searchlist
                        })                              
                    },(response) => {
                        console.log('出错啦')
                    })    
                }
            } 

            //本地搜索
            //   return _sel.datalist.filter(function(item) {
            //     return Object.keys(item).some(function(key) {
            //         if(item.Title){
            //             return String(item.Title).indexOf(_sel.key) > -1
            //         }
            //         if(item.Name){
            //             return String(item.Name).indexOf(_sel.key) > -1
            //         }               
            //     })
            //   })

        }
        return this.productdata;
      }    
  },
  methods:{ 
    keydata:function(val){  
          let _sel=this   
          _sel.key=val        
    },      
    //分页
    handleBottomChange(status) {
        this.bottomStatus = status;
    },
    loadBottom() {
        setTimeout(() => {
            this.pages=this.pages+1 
            let _sel=this
            let listid=_sel.$route.params.id
            let listapi=_sel.$route.params.type

            let token=localStorage.getItem("token")
            console.log(this.pages,'页数')
            //请求列表数据
            if(listapi){
                // 普通商品
                if(listapi==="Product"){
                    _sel.$http.get(this.api+'/'+ listapi+'/List/'+listapi+'?token='+token+'&kind='+listid+'&Page='+this.pages).then((response) => {   
                        // 普通商品           
                        if(response.body.data==""){
                            Indicator.open('暂无数据');
                            _sel.allLoaded = true;
                        }else{                           
                            if(listid==="1"){
                                let listdata=response.body.data
                                listdata.map(function(item){
                                    item.routername ="detail";                                
                                })   
                                let  list= _sel.productdata.concat(listdata)
                                _sel.productdata=list      
                                _sel.value="搜索商品/新品/促销/商家"
                            }                             
                        }                                                   
                    },(response) => {
                        console.log('出错啦')
                    })
                }

            }
            this.$refs.loadmore.onBottomLoaded();
        }, 1500);
    },      
    get:function(_sel,listapi,listid){
            let token=localStorage.getItem("token")
            _sel.$http.get(this.api+'/'+ listapi+'/List/'+listapi+'?token='+token+'&kind='+listid).then((response) => {   
                // 普通商品           
                if(listid==="1"){
                  _sel.productdata=response.body.data
                  _sel.productdata.map(function(item){
                      item.routername ="detail";
                  })                   
                  _sel.value="搜索商品/新品/促销/商家"
                }          
                if(listid==="2"){
                    _sel.productdata=response.body.data
                    _sel.productdata.map(function(item){
                        item.routername ="detail";
                    })                    
                    _sel.value="搜索新品"
                }
                if(listid==="3"){                
                    _sel.productdata=response.body.data
                    _sel.productdata.map(function(item){
                        item.routername ="detail";
                    })                    
                     _sel.value="搜索促销品"
                }                                  
            },(response) => {
                console.log('出错啦')
            })            
    }
  }, 
  watch:{
      '$route' (to,from) {
          this.get(this,to.params.type,to.params.id) 
      }
  },  
  mounted(){
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    let _sel=this
    let listid=_sel.$route.params.id
    let listapi=_sel.$route.params.type
    let token=localStorage.getItem("token")
    //请求列表数据
    if(listapi){
        // 普通商品
        if(listapi==="Product"){
            _sel.$http.get(this.api+'/'+ listapi+'/List/'+listapi+'?token='+token+'&kind='+listid).then((response) => {   
                // 普通商品           
                if(listid==="1"){
                    _sel.productdata=response.body.data
                    _sel.productdata.map(function(item){
                        item.routername ="detail";
                    })                   
                    _sel.value="搜索商品/新品/促销/商家"
                }          
                if(listid==="2"){
                    _sel.productdata=response.body.data
                    _sel.productdata.map(function(item){
                        item.routername ="detail";
                    })                    
                    _sel.value="搜索新品"
                }
                if(listid==="3"){                
                    _sel.productdata=response.body.data
                    _sel.productdata.map(function(item){
                        item.routername ="detail";
                    })                    
                    _sel.value="搜索促销品"
                }                                  
            },(response) => {
                console.log('出错啦')
            })
        }
        // 供应商列表
        if(listapi==="Supplier"){
             _sel.$http.get(this.api+'/'+ listapi+'/List/?token='+token).then((response) => {     
                _sel.productdata=response.body.data    
                _sel.productdata.map(function(item){
                    item.labelico ="ren";
                    item.routername ="supplierdetail";
                })
                _sel.value="搜索供应商"                                    
            },(response) => {
                console.log('出错啦')
            })    
        }
    } 
    if(typeof(listapi)=="undefined") {
        _sel.$http.get(this.api+'/Product/List/1?token='+token+'&kind=1').then((response) => {   
                // 普通商品           
                _sel.productdata=response.body.data
                _sel.productdata.map(function(item){
                    item.routername ="detail";
                })                   
                _sel.value="搜索商品/新品/促销/商家"
                 
            },(response) => {
                console.log('出错啦')
            })
    } 
    //搜索
    this.$root.$on('key',this.keydata)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
