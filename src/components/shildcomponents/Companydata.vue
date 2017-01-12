<template>
<div>
  <div class="company">
    <div class="company-item">
      <div class="tit">
        公司介绍
      </div>
      <div class="content">
        {{detail.Desc}}
      </div>
    </div>
    <div class="company-item">
      <div class="tit">
        联系方式
      </div>
      <div class="content">
        {{detail.Content}}
        <div class="content-item">
          全国客服官方热线：400-8817-6888
        </div>
        <div class="content-item">
          售后服务电话：400-8817-6888
        </div>
        <div class="content-item">
          工作时间：周一至周日 早7：00--晚18：30
        </div>
        <div class="content-item">
          地址：杭州市钱江新城新业路8号华联时代大厦A座13楼
        </div>
        <div class="content-item">
          邮编：310016
        </div>
        <div class="content-item">
          Email：Sales@tomic-enjoy.com
        </div>

      </div>
    </div>

  </div>
</div>
</template>
<script>
  export default {
    name: 'companydata',   
    data() {
      return {
        detail:{}
      }
    },
    mounted(){
        let _sel=this   
        let dataid = _sel.$route.params.id
        let token=localStorage.getItem("token")
        // 请求详情页数据
        _sel.$http.get(this.api+'/Supplier/Info/'+dataid+'?token='+token).then((response) => {  
          //公司信息
           _sel.detail=response.body.data.Detail 
             //关联产品    
        }, (response) => {
             console.log('出错啦')
        })      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
 @import "../../assets/scss/companydata.scss"; 

</style>