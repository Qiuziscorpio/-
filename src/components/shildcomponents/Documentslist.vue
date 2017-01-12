<template>
    <div>
      <div class="documents" v-for="data in documents" >
          <div class="companyname">
           {{data.Client}}
          </div>
          <div class="labela">
            <div class="time"> 
              <i class="icon iconfont icon-dingdan"></i> {{data.OrderDate}}
              <i class="icon iconfont icon-kuaisufahuo"></i> {{data.PutDate}}
            </div>
            <div class="name">
              {{data.MName}}
            </div>
          </div> 
          <div class="labelb">
            <div class="goods">
               <i class="icon iconfont icon-iconfonticon21"></i>{{data.ProductNames}}
            </div>
            <div class="price text-yellow">
              {{data.CountPrice}}
            </div>            
          </div>
          <div class="status">
            <div class="text-yellow"> 
                <i class="icon iconfont icon-tips"></i>  {{data.SName}}
            </div>
          </div>                               
      </div>                
    </div>
</template>

<script>
export default {
  name: 'documentslist',
  props:{
    documents:""
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
@import "../../assets/scss/documentslist.scss"; 

</style>
