// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import RouterMap from './router/router'
import Resource from 'vue-resource'
import Mintui from 'mint-ui';
import { Lazyload } from 'mint-ui';
import WeChatSDK from './assets/js/WeChatSDK.js'
import loading from './assets/img/loading.png';

Vue.use(Router)
Vue.use(Resource)
Vue.use(Mintui)
Vue.use(Lazyload)

const router = new Router({
  mode: 'history',
  routes: RouterMap
})

const wechat = new WeChatSDK()

//图片加载失败
Vue.prototype.setErrorImg = function(imgObj){
  return  imgObj.target.src=loading
}

// 数据接口
Vue.prototype.api="http://api.91ygj.net/WeChatMall"
// erp接口
Vue.prototype.erpapi="http://api.91ygj.net"
Vue.http.options.emulateJSON = true

/*//用户的登录令牌
var token="31d8f73ea0564547a0b09cf07800d843"
//用户的信息
var username="测试君"
var userpicture="http://img5.imgtn.bdimg.com/it/u=2173640118,1888901789&fm=21&gp=0.jpg"
localStorage.setItem("token",token)
localStorage.setItem("username",username)
localStorage.setItem("userpicture",userpicture)*/


//全局监听路由 登录授权 
router.beforeEach(({ meta, path }, from, next) => {
    wechat.initUserInfo(function (res) {
        if(res.msg==="未登录!"){
            next();
            return document.location.href = res.data
        }     
    })
    next();
})


/* eslint-disable no-new */
new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router,
  WeChatSDK
});
