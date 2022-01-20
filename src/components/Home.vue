<template>
    <div class="flex justify-center items-center flex-wrap h-screen">
        <div
            class="w-full md:w-1/4 p-2 m-auto"
            v-for="product in products"
            :key="product.id"
        >
            <ProductCard
                :productTitle="product.title"
                :productDes="product.detail"
                :productPrice="product.price"
                :productPic="product.picture"
                :addToBasket="addToCounter(product)"
            />
        </div>
        <router-link class="p-2 rounded bg-gray-600 text-white" to="/basket"
            >سبد خرید</router-link
        >
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
    components: {
        ProductCard,
    },
    computed: {
        ...mapState('products', ['products']),
        ...mapState('basket', ['selectedItems']),
        ...mapGetters('basket', ['addToBasketItem']),
    },
     methods: {
        ...mapMutations('basket', ['addToCounter']),
    },
}
</script>
