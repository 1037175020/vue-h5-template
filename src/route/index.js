/*
 * @Author: your name
 * @Date: 2020-06-05 09:50:02
 * @LastEditTime: 2020-09-20 22:27:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ruian_h5/src/route/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//解决重复点击相同路由控制台报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
        path: '/',
        name: '',
        component: resolve => require(['../pages/home/Home.vue'], resolve),
        children: []
    }
]

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: routes
})