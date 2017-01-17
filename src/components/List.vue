<template>

<div class="flex-vertical">
    <!--搜索条-->
    <searchbar :placeholder="value"></searchbar>
    <!--列表-->
    <div class="flex-vertical-content" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
            <div  v-for="item in list2" class="page-loadmore-listitem">
          	    {{ item }}
            </div>
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
      list2: [],
      wrapperHeight: 0,
      bottomStatus: '',
      allLoaded: false,
      pages:0,
      key:"",
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
            let lastValue = this.list2[this.list2.length - 1];
            if (lastValue < 40) {
            for (let i = 1; i <= 5; i++) {
                this.list2.push(lastValue + i);
            }
            } else {
            this.allLoaded = true;
            }
            this.$refs.loadmore.onBottomLoaded();
        }, 1500);
    }     
  }, 
created() {
    for (let i = 1; i <= 1; i++) {
        this.list2.push(i);
    }
},  
  watch:{
      '$route' (to,from) {
      },
      key:function(){
      }
  },  
  mounted(){
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    //搜索
    this.$root.$on('key',this.keydata)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
