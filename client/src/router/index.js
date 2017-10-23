import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import VnLogin from '@/views/VnLogin'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'GoodsList',
            component: GoodsList
        },
        {
            path: '/VnLogin',
            name: 'VnLogin',
            component: VnLogin
        }
    ]
})