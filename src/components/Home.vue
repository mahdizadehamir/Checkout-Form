<template>
    <NavigationBar />

    <vueper-slides
        class="no-shadow max-w-4xl mx-auto p-4"
        :touchable="true"
        fixed-height="450px"
        :visible-slides="3"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2 } }"
    >
        <vueper-slide v-for="product in products" :key="product.id">
            <template #content>
                <ProductCard
                    :productTitle="product.title"
                    :productDes="product.detail"
                    :productPrice="toFarsiNumber(product.price)"
                    :productPic="product.picture"
                    @addingToBasket="
                        addToCounter(product);
                        notify()
                    "
                />
            </template>
        </vueper-slide>
    </vueper-slides>

    <!-- <div class="flex justify-center items-center flex-wrap h-screen">
        <div
            class="w-full md:w-1/4 p-2 m-auto"
            v-for="product in products"
            :key="product.id"
        >
            <ProductCard
                :productTitle="product.title"
                :productDes="product.detail"
                :productPrice="toFarsiNumber(product.price)"
                :productPic="product.picture"
                @addingToBasket="
                    addToCounter(product);
                    notify()
                "
            />
        </div>
        
    </div> -->

    <notifications :width="250" position="bottom right" class="text-center" />
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import ProductCard from './ProductCard.vue'
import { mapGetters, mapMutations, mapState } from 'vuex'
import NavigationBar from './NavigationBar.vue'
export default {
    components: {
        ProductCard,
        NavigationBar,
        VueperSlides,
        VueperSlide,
    },
    computed: {
        ...mapState('products', ['products']),
        ...mapState('basket', ['selectedItems']),
    },
    methods: {
        ...mapMutations('basket', ['addToCounter']),
        toFarsiNumber(n) {
            const farsiDigits = [
                '۰',
                '۱',
                '۲',
                '۳',
                '۴',
                '۵',
                '۶',
                '۷',
                '۸',
                '۹',
            ]

            return n
                .toString()
                .split('')
                .map((x) => farsiDigits[x])
                .join('')
        },
        notify() {
            this.$notify({
                type: 'success',
                text: 'آیتم به سبد خرید اضافه شد',
            })
        },
    },
    beforeCreate() {
        if (
            localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    },
}
</script>

<style>
/* :root.dark{
    background-color: white;
} */

.dark .vueperslides__arrow {
    color: white;}
@media screen  and (max-width:800px){
    .dark .vueperslides__arrow{
        color: black !important;
    }
    .vueperslides__arrow{
        color:black !important;
    }
}
</style>
