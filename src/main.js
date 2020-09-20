/*
 * @Author: your name
 * @Date: 2020-03-23 17:02:24
 * @LastEditTime: 2020-09-20 22:28:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ruian_h5/src/main.js
 */
import Vue from 'vue'
import './util/rem' // 引入rem
import App from './App.vue'

// import fullCalendar from 'vue-fullcalendar'

// Vue.component('full-calendar', fullCalendar)

//路由
import router from './route/index'

//Vuex
import store from './store'

//elementUI
import './plugins/element.js'


//浏览器缓存的配置
import localStorage from './plugins/localStorage'

//全局样式的设置
import './assets/styles/index.scss'

//axios的配置
import axios from './config/httpConfig'

//原型扩展方法
import './config/prototype'

Vue.prototype.$localStorage = localStorage;
Vue.prototype.$http = axios

Vue.config.productionTip = false

//路由拦截 判断登录信息是否存在
const whiteList = ['/login', '/']
router.beforeEach((to, from, next) => {
    if (localStorage("userInfo") && localStorage("userInfo").token) {
        if (to.path === '/login') {
            next({
                path: '/'
            })
        }
        next()
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

Vue.prototype.IMGLINK = "";