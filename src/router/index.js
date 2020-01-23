import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = function(){
    return import('views/home/home.vue')
}
const Cart = ()=> import('views/cart/cart.vue')
const Category = ()=> import('views/category/category.vue')
const Profile = ()=> import('views/profile/profile.vue')
const Detail = ()=> import('views/detail/detail.vue')
//1.安装插件
Vue.use(VueRouter)
//2.创建路由实例
const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/detail/:id',
        component:Detail
    }
]
const router =  new VueRouter({
     routes,
     mode:'history',
})
export default router