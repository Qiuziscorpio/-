// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import RouterMap from './router/router'
import Resource from 'vue-resource'
import Mintui from 'mint-ui';

Vue.use(Router)
Vue.use(Resource)
Vue.use(Mintui)

const router = new Router({
  mode: 'history',
  routes: RouterMap
})

// 数据接口
Vue.prototype.api="http://rap.taobao.org/mockjsdata/11407/Mall"

/* eslint-disable no-new */
new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
});
