<template>
<div>
  <div class="downmenubtn">
    商品
  </div>
  <ul class="downmenu">
    <li>商品</li>
    <li>店铺</li>
  </ul>
</div>
</template>

<script>
  export default {
    name: 'downmenu',
    props:{
      contact:""
    },    
    data() {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
 @import "../../assets/scss/downmenu.scss"; 

</style>