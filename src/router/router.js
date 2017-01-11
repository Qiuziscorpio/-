'use strict'
import index from '../components/Index'
import search from '../components/Search'
import list from '../components/List'
import detail from '../components/Detail'
import supplierdetail from '../components/SupplierDetail'
import personalcenter from '../components/Personalcenter'
import about from '../components/About'
import documents from '../components/Documents'
import companydata from '../components/shildcomponents/Companydata'




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
        component:detail, 
        name:'detail'
    },
    //企业列表页详情
    {
        path: '/supplierdetail/:id',
        component: supplierdetail,
        name: "supplierdetail",
        children: [{
                path: '',
                component: list,
                name: "supplierdetaillist"
            },
            //全部 商品  新品 促销
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
    //外部单据
    { 
        path:'/documents', 
        component:documents, 
        name:'documents'
    },      
    //关于
    { 
        path:'/about', 
        component:about, 
        name:'about'
    }                    
]