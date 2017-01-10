<template>
  <div class="searchbox">
    <!--搜索-->
      <div class="search">
        <span class="magnify"><i class="icon iconfont icon-sousuo"></i></span> 
        <input class="input" :placeholder="placeholder" v-model="searchdata" v-on:keyup="keyup"> 
        <span class="scan" v-if="placeholder!='搜索供应商'"><i class="icon iconfont icon-saoyisao"></i></span> 
      </div>       
  </div>
</template>

<script>
  export default {
    name: 'searchbar',
    props:{
      placeholder:""
    },    
    data() {
      return {
        searchdata:"",
        scan:true
      }
    },
    methods: {   
      keyup:function(){
         this.$root.$emit('key',this.searchdata)
      }
    },    
    mounted() {
    }    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
  @import "../../assets/scss/confi.scss"; 
  placeholder{
    color: #8c8c8c;
  }
  :-ms-input-placeholder {
    color: #8c8c8c;
  }
  ::-webkit-input-placeholder {
     color: #8c8c8c;
  }  
  .searchbox{
    position: relative;
    padding: px2rem(22px);
    margin-bottom: px2rem(22px);
    background: #fff;
    &:after{
        width: 100%;
        content:"";
        position: absolute;
        bottom: 0;
        left:0;
        -webkit-transform:scaleY(.5);
        -webkit-transform-origin:0 0;                    
        border-bottom:px2rem(4px) solid #efefef;
    }    
  }
  .search{
     display: flex;
     align-items: center;  
     position: relative; 
    .magnify{
      i{
        position: absolute;
        top:px2rem(10px);
        left:px2rem(15px);
        @include fc(40px,#8c8c8c)
      }
    }
    .input{
      flex: 1;
      border-radius:px2rem(10px);
      border: 1px #dcdcdc solid;
      padding: px2rem(15px);
      padding-left: px2rem(55px);
      -webkit-appearance: none;
      font-size: px2rem(25px)
    }
    .scan{
      flex: 0 0 10%;
      text-align: right;
      i{
        @include fc(40px,#8c8c8c)
      }
    }
  }
</style>