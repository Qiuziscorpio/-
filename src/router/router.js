'use strict'
import index from '../components/Index'
import search from '../components/Search'
import list from '../components/List'
import detail from '../components/Detail'
import supplierdetail from '../components/SupplierDetail'
import personalcenter from '../components/Personalcenter'
import about from '../components/About'
import documents from '../components/Documents'
import documentsdetail from '../components/Documentsdetail'
import companydata from '../components/shildcomponents/Companydata'
import store from '../components/store'
import bind from '../components/Bind'


export default [

    //设置入口 重定向index
    { path:'/', redirect:'/index' },
    //首页
    { 
        path:'/index', 
        component: index,
        name:'index'
    },
    //搜索
    { 
        path:'/search', 
        component: search, 
        name:'search'
    },
    //更多列表页
    { 
        path:'/list/:type/:id', 
        component: list, 
        name:'list'
    },
    //商品列表页详情
    { 
        path:'/detail/:id', 
        component:detail
    },
    //企业列表页详情
    {
        path: '/supplierdetail/:id',
        component: supplierdetail,
        name: "supplierdetail",
        children: [
            //全部 商品  新品 促销
            { path:'',component:list},
            {
                path: 'supplierdetaillist/:type/:id',
                component: list,
                name: "supplierdetaillist"
            },
            //商家信息
            {
                path: 'companydata/:type/:id',
                component: companydata,
                name: "companydata"
            }                        
        ]
    },
    //个人中心
    { 
        path:'/personalcenter/:id', 
        component:personalcenter, 
        name:'personalcenter'
    }, 
    //收藏
    {
        path:'/store/:type/:id',
        component:store,
        name:'store'
    },
    //外部单据
    { 
        path:'/documents', 
        component:documents, 
        name:'documents'
    },
     //外部单据 详情
    { 
        path:'/documentsdetail/:id', 
        component:documentsdetail, 
        name:'documentsdetail'
    },          
    //关于
    { 
        path:'/about', 
        component:about, 
        name:'about'
    },
    //绑定 
    {
        path:'/user/bind', 
        component:bind, 
        name:'bind'
    }                      
]