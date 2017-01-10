'use strict'
import index from '../components/Index'
import search from '../components/Search'
import list from '../components/List'
import detail from '../components/Detail'
import supplierdetail from '../components/SupplierDetail'

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
        path:'/supplierdetail/:id', 
        component:supplierdetail, 
        name:'supplierdetail'
    }             
]