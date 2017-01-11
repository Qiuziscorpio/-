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
Vue.prototype.api="http://api.91ygj.net/WeChatMall"

//用户的登录令牌
var token="773957bbc5ea45fcad69f1dd11ed1688"
localStorage.setItem("token",token)

/* eslint-disable no-new */
new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
});
