<template>
    <div class="font-bold text-center mt-5">فروشگاه اینترنتی امیران</div>
    <div
        dir="rtl"
        class="flex flex-row p-4 justify-center  mt-4 w-full "
    >
        <router-link
            class="rounded p-2 border-2 border-black"
            :to="{ name: 'Basket' }"
            >سبد خرید</router-link
        >
        <div
            class="
                hr-line
                relative
                inline-block
                w-1/12
                border-b-2 border-red-500
                self-center
                md:mx-5
            "
        ></div>
        <router-link
            class="rounded p-2 border-2  bg-red-500 text-white "
            :to="{ name: 'Checkout' }"
            >دریافت آدرس پستی و نحوه ارسال</router-link
        >
        <div
            class="
                hr-line
                relative
                inline-block
                w-1/12
                border-b-2 border-black
                self-center
                md:mx-5
            "
        ></div>
        <router-link
            class="rounded p-2 border-2 border-black"
            :to="{ name: 'PayMethod' }"
            >نحوه پرداخت</router-link
        >
    </div>
</template>

<script>
export default {}
</script>

<style></style>
