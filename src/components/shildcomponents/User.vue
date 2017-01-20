<template>
  <div>
    <router-link :to="{ name: 'personalcenter',params:{id:'1'}}" tag="div" class="radius">
      <div class="radius-icon bg-yellow">
        <i class="icon iconfont icon-ren1"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'user',
    data() {
      return {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../assets/scss/confi.scss"; 

</style>