<template>
    <div
        class="
            flex
            lg:flex-row
            justify-between
            items-center
            rounded-lg
            shoadow-md
            bg-white
            dark:bg-gray-900
            mt-3
            p-2
            w-full
            shadow-lg
        "
    >
        <a
            href="#"
            class="
                flex flex-col
                items-center
                md:flex-row md:w-xl
                hover:bg-gray-100
                dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700
            "
            alt=""
        >
            <img
                class="
                    object-cover
                    w-full
                    h-52
                    rounded-t-lg
                    md:h-52 md:w-52 md:rounded-md md:rounded-l-lg
                "
                :src="productPicture"
                alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5
                    class="
                        mb-2
                        font-product
                        font-extrabold
                        text-lg
                        tracking-tight
                        text-gray-900
                        dark:text-white
                    "
                >
                    {{ productTitle }}
                </h5>
                <p class="mb-3 font-product font-normal text-gray-700 dark:text-gray-400">
                    {{ productDetail }}
                </p>
            </div>
        </a>
        <div class="flex flex-col dark:text-white justify-between items-center p-4">
            <p class="font-product">{{ productPrice }}  :قیمت واحد </p>
            <div class="flex flex-row justify-between">
                <input
                    class="w-16 mr-4 border-2 font-product dark:text-black text-center"
                    type="number"
                    name="count"
                    :value="count"
                    v-on:change="$emit('updateCount', $event)"
                />
                <label for="count">:تعداد</label>
            </div>

            <p class="font-product mt-3">جمع مبلغ : {{ totalPrice }}</p>
        </div>
        <a href="#" @click="$emit('trashButton')"><fa class="dark:text-white" icon="trash" /></a>
    </div>
</template>

<script>
export default {
    props: [
        'productPicture',
        'productTitle',
        'productDetail',
        'productPrice',
        'totalPrice',
        'count',
        'input',
        'value',
        'updateCount',
    ],
    emits: ['updateCount', 'trashButton'],

    methods: {},
    computed: {
        // counter:{
        // get(){
        //     return this.$store.state.basket.obj.counter
        // },
        // set(value){
        //     this.$store.dispatch('basket/updateCounter',value)
        // }}
    },
}
</script>

<style></style>
