<template>
<div>
    <div class="datetimepicker">        
        <input  placeholder="2016-09-23" v-model="startdet" class="start"  v-on:click="openPicker('picker1')" readonly /> 
        <div class="label">
          ~
        </div>
        <input  placeholder="2016-09-23" v-model="enddet"  class="end" readonly  v-on:click="openPicker('picker2')" />
    </div>
    <mt-datetime-picker
      ref="picker1"
      type="date"
      v-model="value4"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="startChange">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="picker2"
      type="date"
      v-model="value4"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="endChange">
    </mt-datetime-picker>
    </mt-datetime-picker>    
</div>
</template>


<script>

  import { DatetimePicker } from 'mint-ui';
  export default {
    name: 'datetpicker', 
    methods:{ 
      openPicker(picker) {
        this.$refs[picker].open();
      },
      startChange(value) {
          var date = new Date(value);
          this.startdet=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      },
       endChange(value) {
          var date = new Date(value);
          this.enddet=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      }                
    },
    component:{
      DatetimePicker
    },
    data() {
      return {
        startdet:"",
        enddet:"",
        value4: '2017 11 12',
        visible4: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
 @import "../../assets/scss/datetimepicker.scss"; 

</style>