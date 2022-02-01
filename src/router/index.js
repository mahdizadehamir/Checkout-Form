import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Basket from '/src/components/Basket.vue'
import Checkout from '/src/components/Checkout.vue'
import NotFound from '/src/components/NotFound.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path:'/basket',
        name:'Basket',
        component:Basket
    },
    {
        path:'/checkout',
        name:'Checkout',
        component:Checkout
    },
    {
        path:"/:catchAll(.*)",
        name:'NotFound',
        component:NotFound,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
