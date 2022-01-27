n<template>
    <div class="flex justify-center items-center flex-wrap h-screen">
        <div
            class="w-full md:w-1/4 p-2 m-auto"
            v-for="product in products"
            :key="product.id"
        >
            <ProductCard
                :productTitle="product.title"
                :productDes="product.detail"
                :productPrice="(toFarsiNumber(product.price))"
                :productPic="product.picture"
                @addingToBasket="addToCounter(product) "
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
        
    },
     methods: {
        ...mapMutations('basket', ['addToCounter']),
         toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n
      .toString()
      .split('')
      .map(x => farsiDigits[x])
      .join('');
  }
    }
}
</script>
