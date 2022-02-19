<template>
    <NavigationBar />
    <div class="flex justify-center items-center flex-wrap h-screen">
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
        <router-link
            class="p-2 rounded bg-gray-600 text-white"
            :to="{ name: 'Basket' }"
            >سبد خرید</router-link
        >
        <notifications
            :width="250"
            position="bottom right"
            class="text-center"
        />
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import { mapGetters, mapMutations, mapState } from 'vuex'
import NavigationBar from './NavigationBar.vue'
export default {
    components: {
        ProductCard,
        NavigationBar,
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
    mounted() {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    },
}
</script>
