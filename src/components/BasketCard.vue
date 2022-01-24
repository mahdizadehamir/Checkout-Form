<template>
    <div class="flex flex-row items-center">
        <a
            href="#"
            class="
                flex flex-col
                items-center
                bg-white
                rounded-lg
                shoadow-md
                md:flex-row md:max-w-xl
                hover:bg-gray-100
                dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
                mt-3
                p-2
            "
            alt=""
        >
            <img
                class="
                    object-cover
                    w-full
                    h-96
                    rounded-t-lg
                    md:h-auto md:w-48 md:rounded-none md:rounded-l-lg
                "
                :src="productPicture"
                alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5
                    class="
                        mb-2
                        font-extrabold
                        tracking-tight
                        text-gray-900
                        dark:text-white
                    "
                >
                    {{ productTitle }}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {{ productDetail }}
                </p>
            </div>
            <div>
                <p class="font-bold m-2 ">{{ productPrice }}</p>
                <label for="">:تعداد</label>
                <input class="w-10 m-2 border-2" type="number" :value="count">
                <p>جمع مبلغ : {{totalPrice}}</p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: ['productPicture', 'productTitle', 'productDetail', 'productPrice','totalPrice','count'],
}
</script>

<style></style>
