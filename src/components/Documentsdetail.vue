<template>
    <div class="verticalheight">
        <div class="flex-vertical">
            <div class="flex-vertical-content">
                <div class="documentsdetail">
                    <div class="documentsdetail-content">
                        <div class="head">
                            <div class="tit">
                                单据信息
                            </div>
                            <div class="time">
                                {{detaildata.OrderDate}}
                            </div>
                        </div>
                        <div class="content">
                            <div class="list">
                                <div class="sublist">
                                    <span class="subtit">
                                        客户
                                    </span>
                                    <span class="label">{{detaildata.Client}} </span>
                                </div>
                            </div>
                            <div class="list">
                                <div class="sublist">
                                    <span class="subtit">
                                        联系人
                                    </span>
                                    <span class="label">{{detaildata.Linkman}}</span>
                                    <a :href="'tel://'+detaildata.Phone"  class="text-blue">
                                        {{detaildata.Phone}}
                                    </a>
                                </div>
                            </div>
                            <div class="list">
                                <div class="sublist">
                                    <span class="subtit">
                                        订单日期
                                    </span>
                                    <span class="label">{{detaildata.OrderDate}}</span>
                                </div>
                                <div class="sublist">
                                    <span class="subtit">
                                        合计金额
                                    </span>
                                    <span class="label">{{detaildata.PutCountPrice}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="documentsdetail-table">
                        <table border="0" cellspacing="0" cellpadding="0">
                            <thead>
                                <tr>
                                    <td> 品牌 </td>
                                    <td> 编号 </td>
                                    <td> 产品</td>
                                    <td> 条码</td>
                                    <td> 单位 </td>
                                    <td> 数量 </td>
                                    <td> 副单位</td>
                                    <td> 装箱数</td> 
                                    <td> 箱数</td>
                                    <td> 零数</td>
                                    <td> 单价</td> 
                                    <td> 金额</td>
                                    <td> 折扣</td> 
                                    <td> 折扣金额</td>                            
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for=" data  in detaildata.Products">
                                    <td> {{data.Brand}} </td>
                                    <td> {{data.Number}} </td>
                                    <td> {{data.Name}} </td>
                                    <td> {{data.BarCode}} </td>
                                    <td> {{data.Unit}} </td>
                                    <td> {{data.Count}} </td>
                                    <td> {{data.Unit2}} </td>
                                    <td> {{data.CaseNumNum}} </td>
                                    <td> {{data.CaseNum}} </td>
                                    <td> {{data.ZreoNum}} </td>
                                    <td> {{data.Price}} </td>
                                    <td> {{data.CountPrice}}</td>
                                    <td> {{data.DisCount}} </td>
                                    <td> {{data.DisCountPrice}} </td>
                                </tr>                                                                        
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="documentsdetail-footer">
                应收金额    <span class="text-yellow"> ¥ {{detaildata.PutCountPrice}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Documentsdetail',
        data() {
            return {
                detaildata:{}
            }
        },
        methods: {

        },
        mounted() {
            let _sel = this
            let id = _sel.$route.params.id
            console.log('详情页', this.erpapi + '/EnterpriseOrder/Orderdetail')
            _sel.$http.get(this.erpapi + '/EnterpriseOrder/Orderdetail?id=' + id).then((response) => {
                //外部单据详情
                _sel.detaildata=response.data.data
            }).then((response) => {

            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/documentslist.scss"; 
</style>