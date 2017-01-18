let vue = require('vue');
let vuesrc = require('vue-resource');

class WeChatSDK {
    constructor(msg) {
        this.Role = msg.Role;
        this.Title = msg.Title || '';
        this.Link = msg.Link || '';
        this.ImgUrl = msg.ImgUrl || '';
        this.Desc = msg.Desc || '';
        this.wxConfig = {};
    }
    //绑定注册新用户
    bindNewUser(data, callback) {
        let url = 'http://192.168.1.14:51241/WeChat/Bindwx';
        vue.http.post(url, JSON.stringify(data)).then((rsp) => {
            if (rsp && rsp.body) {
                if (rsp.body.code == 200) {
                    var res = rsp.body;
                    localStorage.setItem("UserOpenId", res.Openid);
                    localStorage.setItem("username", res.UserName);
                    localStorage.setItem("userpicture", res.Avatar);
                    localStorage.setItem("token", res.Token);
                }
                callback(rsp.body);
            }
            //console.log(JSON.stringify(rsp));
        });
    }
    //获取用户的基本信息
    initUserInfo(callback) {
        let self = this;
        let url = `http://192.168.1.14:51241/user/WeUserAccount`;
        let data = { kind: "mall", openid: localStorage.getItem('UserOpenId'), rurl: location.href };
        //console.log(JSON.stringify(data));
        vue.http.post(url, JSON.stringify(data)).then((rsp) => {
            callback(rsp.body);
            //console.log(JSON.stringify(rsp));
        });
    }
    //从API获取微信的签名和票据
    initWeChatConfig(callback) {
        let self = this;
        let url = `http://api.91ygj.net/wx/appconfig?url=${location.href.split('#')[0]}&stamp=${parseInt(new Date().getTime() / 1000)}`;
        //从API获取微信配置的的签名和票据
        vue.http.get(url).then((rsp) => {
            if (rsp && rsp.data.code == 200) {
                self.wxConfig = rsp.data.data;
                console.log(JSON.stringify(self.wxConfig));
                //在当前页面配置微信的配置文件
                var arr_role = [];
                for (var i = 0; i < self.Role.length; i++) {
                    arr_role.push(self.Role[i]);
                }
                self.Role = arr_role;
                self.wxConfig.jsApiList = self.Role;    //["onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems"];

                wx.ready(function () {
                    callback();
                });

                wx.error(function (res) {
                    console.log("Error!");
                });
                //配置微信的内容
                wx.config(self.wxConfig);
            } else {
                document.location.href = "/error.html";
            }
        });
    }
    //隐藏微信右上菜单
    hideMenuItem() {
        wx.hideMenuItems({
            menuList: [
                "menuItem:share:qq",
                "menuItem:share:weiboApp",
                "menuItem:favorite",
                "menuItem:share:facebook",
                "menuItem:share:QZone",
                "menuItem:editTag",
                "menuItem:delete",
                "menuItem:copyUrl",
                "menuItem:originPage",
                "menuItem:readMode",
                "menuItem:openWithQQBrowser",
                "menuItem:openWithSafari",
                "menuItem:share:email",
                "menuItem:share:brand"
            ] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        });
    }
    //分享到朋友圈
    setShareToC() {
        let self = this;
        wx.onMenuShareTimeline({
            title: self.Title,      // '测试的标题', // 分享标题
            link: self.Link,        // 'http://www.baidu.com', // 分享链接
            imgUrl: self.ImgUrl,    // 'http://www.91ygj.com/Content/images/index/2.png', // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    }
    //分享给朋友
    setShareToF() {
        let self = this;
        wx.onMenuShareAppMessage({
            title: self.Title,      // '测试的标题Message', // 分享标题
            desc: self.Desc,        // 'hahahahahahahahahahahahaaha', // 分享描述
            link: self.Link,        // 'http://www.sina.com.cn', // 分享链接
            imgUrl: self.ImgUrl,    // 'http://www.91ygj.com/Content/images/index/1.png', // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    }
    scanQrCode(callback) {
        wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
                var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                // var arr_result = result.split(',');
                // callback(arr_result[1]);
            }
        });
    }
}

module.exports = WeChatSDK;