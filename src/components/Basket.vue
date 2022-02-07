<template>
    <div class="flex flex-row justify-between flex-wrap min-h-screen m-auto">
        <div class="flex flex-col md:w-3/5 sm:w-full w-full">
            <div v-for="item in basketItems" :key="item.id">
                <BasketCard
                    :productDetail="products[item.id].detail"
                    :productPicture="products[item.id].picture"
                    :productTitle="products[item.id].title"
                    :productPrice="toFarsiNumber(products[item.id].price)"
                    :count="item.qun"
                    :totalPrice="
                        toFarsiNumber(item.qun * products[item.id].price)
                    "
                    @updateCount="
                        changeCount([
                            basketItems.indexOf(item),
                            $event.target.value,
                        ])
                    "
                    @trashButton="deleteItem(item)"
                >
                </BasketCard>
            </div>
        </div>
        <div
            dir="rtl"
            class="
                flex flex-col
                justify-start
                md:mt-3
                sm:mt-2
                rounded-lg
                shadow-md
                bg-white
                max-h-72
                p-2
                md:w-1/3
                sm:w-full
                w-full
            "
            :class="[basketItems.length === 0 ? 'hidden' : 'display']"
        >
        <div class="flex flex-row justify-between">
            <p class="mb-1">
                جمع سبد خرید 
            </p>
            <span class="font-bold mb-1 ml-3">
                {{toFarsiNumber(basketAllPrice)}}
            </span>
        </div>
            
            <p class="">
                هزینه‌ی ارسال در ادامه بر اساس آدرس، زمان و نحوه‌ی ارسال انتخابی
                شما‌ محاسبه و به این مبلغ اضافه خواهد شد
            </p>
            <router-link
                to="/Checkout"
                class="
                    rounded-lg
                    bg-red-500
                    mt-4
                    p-4
                    text-white text-center
                    md:w-4/5
                    sm:w-3/5 sm:self-center
                "
                >ادامه فرایند خرید
            </router-link>
        </div>
    </div>
</template>

<script>
import BasketCard from './BasketCard.vue'
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
    components: { BasketCard },
    data() {
        return {}
    },
    computed: {
        //importing stateItems From Store
        ...mapState('products', ['products']),
        ...mapState('basket', ['basketItems', 'allPrice']),
        basketAllPrice: function () {
            let sum = 0
            for (let i = 0; i < this.basketItems.length; i++) {
                sum +=
                    parseFloat(this.basketItems[i].qun) *
                    parseFloat(this.products[this.basketItems[i].id].price)
            }
            return sum
        },
    },
    methods: {
        //converting Eng Numbers To Persian
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
        //importing Mutation Methods
        ...mapMutations('basket', ['deleteItem', 'changeCount']),
        myBackButtonFunction(){
            this.$router.go(-1)
        },
    },
    mounted(){
            document.addEventListener("backbutton",this.myBackButtonFunction,false)
    },
    beforeUnmount(){
        document.removeEventListener("backbutton",this.myBackButtonFunction)
    }
}
</script>

<style></style>
