<template>
    <div>
      <div class="documents" v-for="data in documents" >    
          <div class="companyname">
           {{msg.Client}}
          </div>
          <div class="labela">
            <div class="time"> 
              <i class="icon iconfont icon-dingdan"></i> {{msg.OrderDate}}
              <i class="icon iconfont icon-kuaisufahuo"></i> {{msg.PutDate}}
            </div>
            <div class="name">
              {{msg.MName}}
            </div>
          </div> 
          <div class="labelb">
            <div class="goods">
               <i class="icon iconfont icon-iconfonticon21"></i>{{msg.ProductNames}}
            </div>
            <div class="price text-yellow">
              ¥{{msg.CountPrice}}
            </div>            
          </div>
          <div class="status">
            <div class="text-yellow"> 
                <i class="icon iconfont icon-tips"></i>  {{msg.SName}}
            </div>
          </div> 
      </div>                
    </div>
</template>

<script>
export default {
  name: 'documentslist',
  props:{
    documents:"",
    msg:""
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
@import "../../assets/scss/documentslist.scss"; 

</style>
