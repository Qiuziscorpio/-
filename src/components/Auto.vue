<template>
    <div class="verticalheight"></div>
</template>

<script>
    //微信SDK
    import WeChatSDK from '../assets/js/WeChatSDK.js'

    export default {
        name: 'auto',
        data() {
            return {
                Param: { kind: 'mall', token: '', RedirectTo: '' },
                wechat: new WeChatSDK({ Role: [] })
            }
        },
        methods: {
            //获取URL传参数
            getPageParamete: function (name) {
                var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
                var r = window.location.search.substr(1).match(reg);
                if (r != null) {
                    return unescape(r[2]);
                }
                return null;
            }
        },
        mounted() {
            let self = this;
            self.Param.token = self.getPageParamete('token');
            self.Param.RedirectTo = self.getPageParamete('re');
            //console.log(JSON.stringify(self.Param));

            let data = self.Param
            self.wechat.autoUserLogin(data, function (res) {
                if (res.code == 200) {
                    localStorage.setItem("UserOpenId", res.data.WxOpenId);
                    //console.log(JSON.stringify(res.data));
                    document.location.href = self.RedirectTo;     //成功绑定用户的信息，跳转回用户所请求的页面地址
                } else {
                    alert(res.msg);
                    console.log(JSON.stringify(res));
                }
            })
        }
    }
</script>