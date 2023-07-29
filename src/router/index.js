import Vue from 'vue'
import vueRouter from 'vue-router'
import LogIn from '@/views/LogIn'
import layout from '@/layout'
import Cookie from "js-cookie";

Vue.use(vueRouter)

const Router = new vueRouter({
    routes: [
        //主路由
        {
            path: '/',
            component: layout,
            name: 'layout',
            meta: { label: '首页' },
            redirect: "/home",
            children: []
        },
        {
            path: '/login',
            component: LogIn,
            name: 'login',
        },
    ]
})
export default Router
Router.beforeEach((to, from, next) => {
    //判断token存不存在
    const token = Cookie.get('token')
    // token不存在，说明当前用户是未登录，应该跳转至登录页
    if (!token && to.name !== 'login') {
        next({ name: 'login' })
    } else if (token && to.name === 'login') {
        //token存在，说明用户登录，
        next({ name: 'home' })
    } else {
        next()
    }
})
//重复跳转报错取消
const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
