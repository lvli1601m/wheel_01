import Vue from 'vue';
import VueRouter from 'vue-router';
// 路由懒加载
const login = () =>import ('../components/Login');
const Index = () =>import ('../components/Index');
const Detail = () =>import ('../components/Detail');
const Img = () =>import ('../components/Img');
const Color = () =>import ('../components/Color');
const Type = () =>import ('../components/Type');
const Quotation = () =>import ('../components/Quotation');
const ImgItem = () =>import ('../components/ImgItem');
const City = () =>import ('../components/common/city');
// 需要安装插件 cnpm i -D babel-plugin-syntax-dynamic-import
Vue.use(VueRouter);
const router =  new VueRouter({
    // 两种模式
    // mode: 'hash',
    routes: [{
        path: '/index',
        name: 'Index',
        component: Index 
    }, {
        path: '/detail',
        name: 'detail',
        component: Detail
    }, {
        path: '/color',
        component: Color
    }, {
        path: '/city',
        name: 'city',
        component: City
    },{
        path: '/type',
        component: Type
    }, {
        path: '/img',
        component: Img
    }, {
        path: '/quotation',
        component: Quotation
    },{
        path: '/imgItem',
        component: ImgItem
    }, 
    // 登录页面
    {
        path: '/login',
        name: 'login',
        component: login
    },{
        path: '*',
        redirect: '/index'
    }]
})


// 全局导航守卫
router.beforeEach((to, from, next)=>{
    let login = window.localStorage.getItem('login');
    if(!login && to.path != '/login'){
        next('/login')
    }
    next();
})

export default router;

  
