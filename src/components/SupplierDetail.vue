<template>
  <div>
    <!--联系模块-->
    <contact :contact="contactdata"></contact>
    <tab :tab="tabdata"></tab>
    <router-view></router-view>
  </div>
</template>

<script>
  //联系模块
  import contact from 'components/shildcomponents/Contact.vue'
  //tab切换
  import tab from 'components/shildcomponents/Tab.vue'
  export default {
    name: 'search',
    components: {
      contact,
      tab
    },
    data() {
      return {
        contactdata: {},
        dataid: "",
        tabdata: [
          {
            tabname: "supplierdetaillist",
            tabtit: "全部商品",
            tabtype: "Product",
            tabid: "0",
            classactive: true
          },
          {
            tabname: "supplierdetaillist",
            tabtit: "新品",
            tabtype: "Product",
            tabid: "2",
            classactive: false
          },
          {
            tabname: "supplierdetaillist",
            tabtit: "促销",
            tabtype: "Product",
            tabid: "3",
            classactive: false
          },
          {
            tabname: "companydata",
            tabtit: "商家信息",
            tabtype: "companydata",
            tabid: "",
            classactive: false
          },
        ]
      }
    },
    watch: {
      '$route'(to, from) {
        this.tabdata[0].classactive = false
        if (to.params.type === "Product") {
          this.$root.$emit('supplierinfo', this.dataid)
        }
      },
    },
    mounted() {
      let _sel = this
      _sel.dataid = _sel.$route.params.id
      let token = localStorage.getItem("token")
      // 请求详情页数据
      _sel.$http.get(this.api + '/Supplier/Info/' + _sel.dataid + '?token=' + token).then((response) => {
        //供应商数据
        _sel.contactdata = response.body.data.Supplier
        _sel.contactdata.routername = "supplierdetail"
        _sel.tabdata[3].tabid = _sel.dataid

        _sel.contactdata.IsFav = response.body.data.IsFav
      }, (response) => {
        console.log('出错啦')
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>