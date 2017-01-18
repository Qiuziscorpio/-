<template>
    <div>
        <div class="verticalheight">
            <div>
                <input type="text" v-model="Account" placeholder="请输入手机号码" />
            </div>
            <div>
                <input type="text" v-model="ValidCode" placeholder="请输入手机验证码" />
            </div>
            <div>
                <button type="button" v-on:click="bindUser">绑定</button>
            </div>
            <div>
            </div>
</template>

<script>
    //微信SDK
    import WeChatSDK from '../assets/js/WeChatSDK.js'

    export default {
        name: 'bind',
        data() {
            return {
                Openid: '',
                RedirectTo: '',
                Account: '',
                ValidCode: '',
                msg: 'Welcome to Your Vue.js App'
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
            },
            //发起绑定用户的方法
            bindUser: function () {
                let self = this;
                let data = { kind: 'mall', acc: self.Account, pwd: self.ValidCode, oid: self.Openid, re: self.RedirectTo };
                let wechat = new WeChatSDK({ Role: [] });
                wechat.bindNewUser(data, function (res) {
                    if (data.code == 200) {
                        document.location.href = self.RedirectTo;     //成功绑定用户的信息，跳转回用户所请求的页面地址
                    } else {

                    }
                })
            }
        },
        mounted() {
            let self = this;
            self.Openid = self.getPageParamete('oid');
            self.RedirectTo = self.getPageParamete('re');
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/about.scss";
</style>