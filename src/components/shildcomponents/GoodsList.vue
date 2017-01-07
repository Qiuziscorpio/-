<template>
<div>
  <div class="flex-row xs">
    <div class="flex-grid flex-grid3" v-for="data in datalist">
      <div class="panel">
        <div class="panel-img">
          <img :src="data.CoverImg">
          <div class="panel-radius">
            <div class="panel-radius-icon" :class="bgtype">
              <i class="icon iconfont" :class="icontype"></i>
            </div>
          </div>
        </div>
        <div class="panel-content">
          <div class="tit">{{data.Title}}</div>
          <div class="num" :class="colortype">
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
      imgurl:img,
      bgtype:"bg-blue",
      icontype:"icon-xinpin1",
      tit:"玻璃玻璃保温杯玻璃保温杯玻璃保温杯玻璃保温杯玻璃保温杯保温杯",
      num:"¥56.0",
      colortype:"text-yellow"
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"  scoped>
 @import "../../assets/scss/panel.scss"; 
</style>
