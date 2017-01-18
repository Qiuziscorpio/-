<template>
    <div class="flex-vertical">
        <!--搜索条-->
        <searchbar :placeholder="value"></searchbar>
        <!--列表-->
        <div class="flex-vertical-content" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
            <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :auto-fill="false"
                ref="loadmore">
                <goodslist :datalist="productdata"></goodslist>
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
    //商品列表
    import goodslist from 'components/shildcomponents/GoodsList.vue'
    //分页 提示
    import { Loadmore, Indicator } from 'mint-ui';

    export default {
        name: 'list',
        components: {
            searchbar,
            goodslist
        },
        data() {
            return {
                productdata: [],
                searchlist: [],
                value: "",
                list: [],
                list2: [],
                wrapperHeight: 0,
                bottomStatus: '',
                allLoaded: false,
                pages: 1,
                key: "",
            }
        },
        methods: {
            keydata: function (val) {
                let _sel = this
                _sel.key = val
            },
            //供应商详情  关联商品
            supplierinfodata: function (val) {
                let _sel = this
                localStorage.setItem("sid", val)
                let token = localStorage.getItem("token")
                let listid = _sel.$route.params.id
                let listapi = _sel.$route.params.type
                // 全部商品    
                if (listapi === "Product") {
                    _sel.$http.get(this.api + '/Product/List/?token=' + token + '&kind=' + listid + '&Sid=' + val).then((response) => {
                        // 全部商品           
                        if (listid === "0") {
                            _sel.productdata = response.body.data
                            _sel.productdata.map(function (item) {
                                item.routername = "detail";
                            })
                            _sel.value = "搜索商品/新品/促销/商家"
                        }
                        if (listid === "2") {
                            _sel.productdata = response.body.data
                            _sel.productdata.map(function (item) {
                                item.routername = "detail";
                            })
                            _sel.value = "搜索新品"
                        }
                        if (listid === "3") {
                            _sel.productdata = response.body.data
                            _sel.productdata.map(function (item) {
                                item.routername = "detail";
                            })
                            _sel.value = "搜索促销品"
                        }
                    }, (response) => {
                        console.log('出错啦')
                    })
                }
            },
            //分页
            handleBottomChange(status) {
                this.bottomStatus = status;
            },
            loadBottom() {
                this.pages = this.pages + 1
                let _sel = this
                let listid = _sel.$route.params.id
                let listapi = _sel.$route.params.type
                let token = localStorage.getItem("token")
                //请求列表数据
                // 全部商品
                if (listapi && _sel.$route.name === "list") {
                    if (listapi === "Product") {
                        _sel.$http.get(this.api + '/' + listapi + '/List/' + listapi + '?token=' + token + '&kind=' + listid + '&Page=' + this.pages).then((response) => {
                            // 普通商品           
                            if (response.body.data == "") {
                                Indicator.open('已加载完');
                                _sel.allLoaded = true;
                                setTimeout(function () {
                                    Indicator.close();
                                }, 1000)
                            } else {
                                if (listid === "1") {
                                    let listdata = response.body.data
                                    listdata.map(function (item) {
                                        item.routername = "detail";
                                    })
                                    let listdatapush = _sel.productdata.concat(listdata)
                                    _sel.productdata = listdatapush
                                    _sel.value = "搜索商品/新品/促销/商家"
                                }
                                if (listid === "2") {
                                    let listdata = response.body.data
                                    listdata.map(function (item) {
                                        item.routername = "detail";
                                    })
                                    let listdatapush = _sel.productdata.concat(listdata)
                                    _sel.productdata = listdatapush
                                    _sel.value = "搜索新品"
                                }
                                if (listid === "3") {
                                    let listdata = response.body.data
                                    listdata.map(function (item) {
                                        item.routername = "detail";
                                    })
                                    let listdatapush = _sel.productdata.concat(listdata)
                                    _sel.productdata = listdatapush
                                    _sel.value = "搜索促销品"
                                }
                            }
                        }, (response) => {
                            console.log('出错啦')
                        })
                    }
                    // 供应商列表
                    if (listapi === "Supplier") {
                        _sel.$http.get(this.api + '/' + listapi + '/List/?token=' + token + '&Page=' + this.pages).then((response) => {
                            if (response.body.data == "") {
                                Indicator.open('已加载完');
                                _sel.allLoaded = true;
                                setTimeout(function () {
                                    Indicator.close();
                                }, 1000)
                            } else {
                                let listdata = response.body.data
                                _sel.listdata.map(function (item) {
                                    item.labelico = "ren";
                                    item.routername = "supplierdetail";
                                })
                                let listdatapush = _sel.productdata.concat(listdata)
                                _sel.productdata = listdatapush
                                _sel.value = "搜索供应商"
                            }
                        }, (response) => {
                            console.log('出错啦')
                        })
                    }
                }


                ////供应商详情  关联商品
                if (typeof listapi === "undefined") {
                    // 普通商品
                    _sel.$http.get(this.api + '/Product/List/?token=' + token + '&kind=' + listid + '&Sid=' + listid + '&Page=' + this.pages).then((response) => {
                        if (response.body.data == "") {
                            Indicator.open('已加载完');
                            _sel.allLoaded = true;
                            setTimeout(function () {
                                Indicator.close();
                            }, 1000)
                        } else {
                            // 普通商品           
                            let listdata = response.body.data
                            listdata.map(function (item) {
                                item.routername = "detail";
                            })
                            let listdatapush = _sel.productdata.concat(listdata)
                            _sel.productdata = listdatapush
                            _sel.value = "搜索商品/新品/促销/商家"
                        }
                    }, (response) => {
                        console.log('出错啦')
                    })
                }
                ////供应商详情  关联商品
                if (_sel.$route.name === "supplierdetaillist") {
                    if (listapi === "Product") {
                        _sel.$http.get(this.api + '/Product/List/?token=' + token + '&kind=' + listid + '&Sid=' + localStorage.getItem("sid") + '&Page=' + this.pages).then((response) => {
                            // 全部商品           
                            if (response.body.data == "") {
                                Indicator.open('已加载完');
                                _sel.allLoaded = true;
                                setTimeout(function () {
                                    Indicator.close();
                                }, 1000)
                            } else {
                                if (listid === "0") {
                                    let listdata = response.body.data
                                    listdata.map(function (item) {
                                        item.routername = "detail";
                                    })
                                    let listdatapush = _sel.productdata.concat(listdata)
                                    _sel.productdata = listdatapush
                                    _sel.value = "搜索商品/新品/促销/商家"
                                }
                                if (listid === "2") {
                                    let listdata = response.body.data
                                    listdata.map(function (item) {
                                        item.routername = "detail";
                                    })
                                    let listdatapush = _sel.productdata.concat(listdata)
                                    _sel.productdata = listdatapush
                                    _sel.value = "搜索新品"
                                }
                                if (listid === "3") {
                                    let listdata = response.body.data
                                    listdata.map(function (item) {
                                        item.routername = "detail";
                                    })
                                    let listdatapush = _sel.productdata.concat(listdata)
                                    _sel.productdata = listdatapush
                                    _sel.value = "搜索促销品"
                                }
                            }

                        }, (response) => {
                            console.log('出错啦')
                        })
                    }
                }
                this.$refs.loadmore.onBottomLoaded();
            }
        },
        watch: {
            //关键字搜索
            key: function () {
                let _sel = this
                let listid = _sel.$route.params.id
                let listapi = _sel.$route.params.type
                let token = localStorage.getItem("token")

                //请求列表数据
                if (listapi && _sel.$route.name === "list") {
                    if (listapi === "Product") {
                        _sel.$http.get(this.api + '/' + listapi + '/List/?token=' + token + '&kind=' + listid + '&Key=' + _sel.key).then((response) => {
                            // 普通商品           
                            if (listid === "1") {
                                _sel.productdata = response.body.data
                                _sel.productdata.map(function (item) {
                                    item.routername = "detail";
                                })
                                _sel.value = "搜索商品/新品/促销/商家"
                            }
                            if (listid === "2") {
                                _sel.productdata = response.body.data
                                _sel.productdata.map(function (item) {
                                    item.routername = "detail";
                                })
                                _sel.value = "搜索新品"
                            }
                            if (listid === "3") {
                                _sel.productdata = response.body.data
                                _sel.productdata.map(function (item) {
                                    item.routername = "detail";
                                })
                                _sel.value = "搜索促销品"
                            }
                        }, (response) => {
                            console.log('出错啦')
                        })
                    }
                    // 供应商列表
                    if (listapi === "Supplier") {
                        _sel.$http.get(this.api + '/' + listapi + '/List/?token=' + token + '&Key=' + _sel.key).then((response) => {
                            _sel.productdata = response.body.data
                            _sel.productdata.map(function (item) {
                                item.labelico = "ren";
                                item.routername = "supplierdetail";
                            })
                            _sel.value = "搜索供应商"
                        }, (response) => {
                            console.log('出错啦')
                        })
                    }
                }

                //供应商详情列表
                if (typeof listapi === "undefined") {
                    // 普通商品
                    _sel.$http.get(this.api + '/Product/List/?token=' + token + '&kind=' + listid + '&Sid=' + listid + '&Key=' + _sel.key).then((response) => {
                        // 普通商品           
                        _sel.productdata = response.body.data
                        _sel.productdata.map(function (item) {
                            item.routername = "detail";
                        })
                        _sel.value = "搜索商品/新品/促销/商家"
                    }, (response) => {
                        console.log('出错啦')
                    })
                }

                //供应商详情列表
                if (_sel.$route.name === "supplierdetaillist") {
                    if (listapi === "Product") {
                        _sel.$http.get(this.api + '/Product/List/?token=' + token + '&kind=' + listid + '&Sid=' + localStorage.getItem("sid") + '&Key=' + _sel.key).then((response) => {
                            // 全部商品           
                            if (listid === "0") {
                                _sel.productdata = response.body.data
                                _sel.productdata.map(function (item) {
                                    item.routername = "detail";
                                })
                                _sel.value = "搜索商品/新品/促销/商家"
                            }
                            if (listid === "2") {
                                _sel.productdata = response.body.data
                                _sel.productdata.map(function (item) {
                                    item.routername = "detail";
                                })
                                _sel.value = "搜索新品"
                            }
                            if (listid === "3") {
                                _sel.productdata = response.body.data
                                _sel.productdata.map(function (item) {
                                    item.routername = "detail";
                                })
                                _sel.value = "搜索促销品"
                            }
                        }, (response) => {
                            console.log('出错啦')
                        })
                    }
                }

            }
        },
        mounted() {
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;

            let _sel = this
            let listid = _sel.$route.params.id
            let listapi = _sel.$route.params.type
            let token = localStorage.getItem("token")

            //请求列表数据
            if (listapi && _sel.$route.name === "list") {
                if (listapi === "Product") {
                    _sel.$http.get(this.api + '/' + listapi + '/List/?token=' + token + '&kind=' + listid).then((response) => {
                        // 普通商品           
                        if (listid === "1") {
                            _sel.productdata = response.body.data
                            _sel.productdata.map(function (item) {
                                item.routername = "detail";
                            })
                            _sel.value = "搜索商品/新品/促销/商家"
                        }
                        if (listid === "2") {
                            _sel.productdata = response.body.data
                            _sel.productdata.map(function (item) {
                                item.routername = "detail";
                            })
                            _sel.value = "搜索新品"
                        }
                        if (listid === "3") {
                            _sel.productdata = response.body.data
                            _sel.productdata.map(function (item) {
                                item.routername = "detail";
                            })
                            _sel.value = "搜索促销品"
                        }
                    }, (response) => {
                        console.log('出错啦')
                    })
                }
                // 供应商列表
                if (listapi === "Supplier") {
                    _sel.$http.get(this.api + '/' + listapi + '/List/?token=' + token).then((response) => {
                        _sel.productdata = response.body.data
                        _sel.productdata.map(function (item) {
                            item.labelico = "ren";
                            item.routername = "supplierdetail";
                        })
                        _sel.value = "搜索供应商"
                    }, (response) => {
                        console.log('出错啦')
                    })
                }
            }

            //供应商详情列表
            if (typeof listapi === "undefined") {
                // 普通商品
                _sel.$http.get(this.api + '/Product/List/?token=' + token + '&kind=' + listid + '&Sid=' + listid).then((response) => {
                    // 普通商品           
                    _sel.productdata = response.body.data
                    _sel.productdata.map(function (item) {
                        item.routername = "detail";
                    })
                    _sel.value = "搜索商品/新品/促销/商家"
                }, (response) => {
                    console.log('出错啦')
                })
            }

            //供应商详情列表
            if (_sel.$route.name === "supplierdetaillist") {
                if (listapi === "Product") {
                    console.log(this.api + '/Product/List/?token=' + token + '&kind=' + listid + '&Sid=' + localStorage.getItem("sid"))
                    _sel.$http.get(this.api + '/Product/List/?token=' + token + '&kind=' + listid + '&Sid=' + localStorage.getItem("sid")).then((response) => {
                        // 全部商品           
                        if (listid === "0") {
                            _sel.productdata = response.body.data
                            _sel.productdata.map(function (item) {
                                item.routername = "detail";
                            })
                            _sel.value = "搜索商品/新品/促销/商家"
                        }
                        if (listid === "2") {
                            _sel.productdata = response.body.data
                            _sel.productdata.map(function (item) {
                                item.routername = "detail";
                            })
                            _sel.value = "搜索新品"
                        }
                        if (listid === "3") {
                            _sel.productdata = response.body.data
                            _sel.productdata.map(function (item) {
                                item.routername = "detail";
                            })
                            _sel.value = "搜索促销品"
                        }
                    }, (response) => {
                        console.log('出错啦')
                    })
                }
            }

            //搜索
            this.$root.$on('key', this.keydata)
            this.$root.$on('supplierinfo', this.supplierinfodata)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>