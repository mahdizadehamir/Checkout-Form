<template>
    <div class="flex justify-center items-center flex-wrap">
        <div
            class="w-full md:w-1/3 p-2"
            v-for="product in products"
            :key="product.id"
        >
            <ProductCard :productTitle="product.title" :productDes="product.detail" :productPrice="product.price" />
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import { mapState } from 'vuex'

export default {
    components: {
        ProductCard,
    },
    computed: {
        ...mapState('products', ['products']),
    },
}
</script>
