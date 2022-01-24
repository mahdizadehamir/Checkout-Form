<template>
    <div class="flex flex-col items-baseline flex-wrap h-screen">
        <div class="w-full md:w-1/4" v-for="item in basketItems" :key="item.id">
            <BasketCard
                :productDetail="products[item.id].detail"
                :productPicture="products[item.id].picture"
                :productTitle="products[item.id].title"
                :productPrice="products[item.id].price"
                :count="item.qun"
            />
        </div>
    </div>
</template>

<script>
import BasketCard from './BasketCard.vue'
import { mapGetters, mapState } from 'vuex'

export default {
    components: { BasketCard },
    computed: {
        ...mapState('products', ['products']),
        ...mapState('basket', ['basketItems']),
        ...mapGetters('basket',['priceCalculator'])
    },
}
</script>

<style></style>
