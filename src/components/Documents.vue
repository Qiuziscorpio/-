<template>
  <div class="flex-vertical verticalheight">
    <!--日期控件-->
    <datetpicker></datetpicker>
    <!--单据列表-->
    <div class="flex-vertical-content" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <documentslist :documents="documentsdata" :msg="msgdata"></documentslist>
        <!--分页-->
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
                <mt-spinner type="snake"></mt-spinner>
            </span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
  //搜索条
  import searchbar from 'components/shildcomponents/Searchbar.vue'
  //日期控件
  import datetpicker from 'components/shildcomponents/Datepicker.vue'
  //外部单据
  import documentslist from 'components/shildcomponents/Documentslist.vue'
  //分页 提示
  import { Loadmore, Indicator } from 'mint-ui';

  export default {
    name: 'search',
    components: {
      searchbar,
      datetpicker,
      documentslist
    },
    data() {
      return {
        value: '请输入关键字',
        documentsdata: {},
        searchlist: {},
        msgdata: {},
        key: "",
        startdet: "",
        enddet: "",
        wrapperHeight: 0,
        bottomStatus: '',
        allLoaded: false,
        pages: 1,
      }
    },
    watch: {
      startdet: function (val) {
        let _sel = this
        let listid = _sel.$route.params.id
        let listapi = _sel.$route.params.type
        let token = localStorage.getItem("token")
        if (val) {
          //搜索列表单据
          _sel.$http.post(this.erpapi + '/EnterpriseOrder/MyOrders',
            { "token": token, "kind": "30,31,32,33,34,35,36,37,38,39", "sdate1": _sel.startdet, "sdate2": _sel.enddet }
          ).then((response) => {
            if (response.data.data != null) {
              _sel.documentsdata = response.data.data.map(function (obj, index) {
                return _sel.msgdata = JSON.parse(obj.MsgData)
              })
            }
            if (response.data.data == null) {
              _sel.documentsdata = response.data.data
            }
          }, (response) => {
            console.log("出错了")
          })
        }
      },
      enddet: function (val) {
        let _sel = this
        let listid = _sel.$route.params.id
        let listapi = _sel.$route.params.type
        let token = localStorage.getItem("token")
        if (val) {
          //搜索列表单据
          _sel.$http.post(this.erpapi + '/EnterpriseOrder/MyOrders',
            { "token": token, "kind": "30,31,32,33,34,35,36,37,38,39", "sdate1": _sel.startdet, "sdate2": _sel.enddet }
          ).then((response) => {
            if (response.data.data != null) {
              _sel.documentsdata = response.data.data.map(function (obj, index) {
                return _sel.msgdata = JSON.parse(obj.MsgData)
              })
            }
            if (response.data.data == null) {
              _sel.documentsdata = response.data.data
            }
          }, (response) => {
            console.log("出错了")
          })
        }
      }
    },
    methods: {
      startdetdata: function (val) {
        let _sel = this
        _sel.startdet = val
      },
      enddetdata: function (val) {
        let _sel = this
        _sel.enddet = val
      },
      //分页
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
          this.pages = this.pages + 1
          let _sel = this
          let token = localStorage.getItem("token")

          //请求单据列表数据
          _sel.$http.post(this.erpapi + '/EnterpriseOrder/MyOrders',
            { "token": token, "kind": "30,31,32,33,34,35,36,37,38,39", "page": this.pages }
          ).then((response) => {
            if (response.data.data != null) {
              let listdata = response.data.data.map(function (obj, index) {
                return _sel.msgdata = JSON.parse(obj.MsgData)
              })
              let list = _sel.documentsdata.concat(listdata)
              _sel.documentsdata = list
            }
            if (response.data.data == null) {
                  Indicator.open('已加载完');
                  _sel.allLoaded = true;
                  setTimeout(function () {
                      Indicator.close();
                  }, 1000)
            }
          }, (response) => {
            console.log("出错了")
          })
          this.$refs.loadmore.onBottomLoaded();
      }
    },
    mounted() {
      let _sel = this
      let token = localStorage.getItem("token")
      _sel.$http.post(this.erpapi + '/EnterpriseOrder/MyOrders',
        { "token": token, "kind": "30,31,32,33,34,35,36,37,38,39" }
      ).then((response) => {
        _sel.documentsdata = response.data.data
        response.data.data.map(function (obj, index) {
          return _sel.msgdata = JSON.parse(obj.MsgData)
        })
      }, (response) => {
        console.log("出错了")
      })

      //时间搜索 开始 结束时间
      this.$root.$on('start', this.startdetdata)
      this.$root.$on('end', this.enddetdata)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
@import "../assets/scss/toast.scss"; 
</style>