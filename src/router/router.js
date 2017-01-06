'use strict'
import index from '../components/Index'
import search from '../components/Search'

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
    }
]