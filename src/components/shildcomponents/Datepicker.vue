<template>
  <div>
    <div class="datetimepicker">
      <input placeholder="开始时间" v-model="startdet" class="start" v-on:click="openPicker('picker1')" readonly />
      <div class="label">
        ~
      </div>
      <input placeholder="结束时间" v-model="enddet" class="end" readonly v-on:click="openPicker('picker2')" />
    </div>
    <mt-datetime-picker ref="picker1" type="date" v-model="value4" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日"
      @confirm="startChange">
    </mt-datetime-picker>
    <mt-datetime-picker ref="picker2" type="date" v-model="value4" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日"
      @confirm="endChange">
    </mt-datetime-picker>
    </mt-datetime-picker>
  </div>
</template>
<script>

  import { DatetimePicker } from 'mint-ui';
  export default {
    name: 'datetpicker',
    methods: {
      openPicker(picker) {
        this.$refs[picker].open();
      },
      startChange(value) {
        var date = new Date(value);
        this.getMonth = (date.getMonth() + 1);
        this.getDate = date.getDate();
        if ((date.getMonth() + 1) < 10) {
          this.getMonth = '0' + (date.getMonth() + 1)
        }
        if (date.getDate() < 10) {
          this.getDate = '0' + date.getDate()
        }
        this.startdet = date.getFullYear() + '-' + this.getMonth + '-' + this.getDate
        this.$root.$emit('start', this.startdet)
      },
      endChange(value) {
        var date = new Date(value);
        this.getMonth = (date.getMonth() + 1);
        this.getDate = date.getDate();
        if ((date.getMonth() + 1) < 10) {
          this.getMonth = '0' + (date.getMonth() + 1)
        }
        if (date.getDate() < 10) {
          this.getDate = '0' + date.getDate()
        }
        this.enddet = date.getFullYear() + '-' + this.getMonth + '-' + this.getDate
        this.$root.$emit('end', this.enddet)
      }
    },
    component: {
      DatetimePicker
    },
    data() {
      return {
        startdet: "",
        enddet: "",
        value4: '2017 85 2',
        visible4: false,
        getMonth: "",
        getDate: "",
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../assets/scss/datetimepicker.scss"; 

</style>