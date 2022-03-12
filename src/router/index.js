import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Basket from '/src/components/Basket.vue'
import Checkout from '/src/components/Checkout.vue'
import NotFound from '/src/components/NotFound.vue'
import PaymentMethod from '/src/components/PaymentMethod.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/basket',
        name: 'Basket',
        component: Basket,
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
    },
    {
        path:'/Payment',
        name:'PayMethod',
        component:PaymentMethod
    }
]

const router = createRouter({
    history: createWebHistory('/Vuex-Online-Store/'),
    routes,
})


export default router
