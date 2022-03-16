<template>
    <div class="bg-white dark:bg-blue-900 shadow-lg hover:shadow-xl rounded-lg">
        <div
            class="
                bg-gray-400
                h-64
                rounded-t-lg
                p-4
                bg-no-repeat bg-center bg-cover
            "
            :style="{ backgroundImage: `url('${productPic}')` }"
        >
            <div class="text-right">
                <button
                    class="text-pink-500 hover:text-pink-600 p-2 rounded-full"
                    style="background: rgba(0, 0, 0, 0.3)"
                >
                    <svg class="w-6 h-6" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <div class="flex flex-col justify-center items-start px-2 pt-2">
            <div class="p-2 flex-grow items-center">
                <h1 class="text-lg font-product dark:text-white">
                    {{ productTitle }}
                </h1>
                <p
                    class="
                        text-gray-500
                        font-product
                        text-xs
                        dark:text-white
                        mt-3
                    "
                >
                    {{ productDes }}
                </p>
            </div>
            <div class="self-end p-2 text-right dark:text-white">
                <div
                    class="
                        font-bold
                        text-black
                        dark:text-white
                        text-lg
                        font-product
                    "
                >
                    <span class="font-product" dir="rtl"
                        >{{ productPrice }} <span class="text-sm">تومان</span>
                    </span>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center px-2 pb-2">
            <div class="p-2">
                <button
                    v-on:click="$emit('addingToBasket')"
                    class="
                        font-product
                        block
                        w-full
                        dark:bg-gray-600 dark:text-white
                        bg-green-400
                        hover:bg-gray-100
                        dark:hover:bg-yellow-700
                        text-teal-500
                        border-2 border-teal-500
                        px-3
                        py-2
                        rounded
                        uppercase
                    "
                >
                    اضافه کردن به کارت
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState('products', ['products']),
        ...mapState('basket', ['selectedItems']),
    },
    props: ['productTitle', 'productDes', 'productPrice', 'productPic'],
    // methods:{
    //     addToBasket(){
    //         this.$emit("addingToBasket")
    //     }
    // },
    emits: ['addingToBasket'],
}
methods: {
}
</script>

<style></style>
