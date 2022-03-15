<template>
    <div
        class="font-bold font-titr text-2xl dark:text-gray-200 text-center mt-5"
    >
        فروشگاه اینترنتی امیران
    </div>
    <div
        dir="rtl"
        class="font-product flex flex-row p-4 justify-center mt-4 w-full"
    >
        <router-link
            class="rounded-xl opacity-60 p-2 shadow-xl bg-red-500 text-white"
            :to="{ name: 'Basket' }"
            >سبد خرید</router-link
        >
        <div
            class="
                hr-line
                relative
                inline-block
                w-1/12
                border-b-2 border-black
                opacity-50
                self-center
                md:mx-5
            "
        ></div>
        <router-link
            class="rounded-xl p-2 shadow-xl bg-red-500 text-white"
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
                opacity-50
            "
        ></div>
        <router-link
            class="rounded-xl p-2 text-white bg-red-500 opacity-60 shadow-xl"
            :to="{ name: 'PayMethod' }"
            >نحوه پرداخت</router-link
        >
    </div>
    <form @submit.prevent action="">
        <div
            class="
                dark:bg-gray-900
                bg-white
                rounded-2xl
                flex flex-row
                shadow-2xl
                mt-2
                p-2
                md:w-5/6
                mx-auto
                font-product
								dark:text-white
            "
        >
            <!-- right column -->
            <div class="summary w-1/4 flex flex-col justify-around">
                <div>
                    <h3 class="mt-4 text-center">: جمع مبلغ</h3>
                    <p dir="rtl" class="text-center mt-4">
                        {{ ToRial(basketAllPrice) }} تومان
                    </p>
                </div>
                <button
                    type="submit"
                    class="text-white bg-red-500 rounded-2xl self-center p-3"
                >
                    ورود به صفحه پرداخت
                </button>
            </div>

            <div dir="rtl" class="flex flex-row justify-around order w-3/4">
                <!-- first  column -->
                <div class="shippingInfo">
                    <h2 class="text-xl dark:text-gray-200 font-bold mt-2 p-1">
                        اطلاعات شناسایی و آدرس پستی
                    </h2>

                    <label class="block" for="firstname"> نام:</label>
                    <input
                        class="dark:text-black rounded form-input h-8 bg-gray-200 mt-1 w-40"
                        name="firstname"
                        type="text"
                        required
                    />
                    <label class="block mt-2" for="lastname"
                        >نام خانوادگی :</label
                    >
                    <input
                        type="text"
                        name="lastname"
                        class="dark:text-black rounded mt-1 h-8 bg-gray-200 w-40"
                        required
                    />
                    <label class="block mt-2 mb-2" for="address"
                        >آدرس تحویل مرسوله :</label
                    >
                    <input
                        class="dark:text-black rounded bg-gray-200 w-3/4 h-8"
                        type="text"
                        name="address"
                        required
                    />
                    <input
                        class="dark:text-black rounded bg-gray-200 w-3/4 block mt-2 h-8"
                        type="text"
                        placeholder="ادامه آدرس"
                    />
                    <label class="block mt-2" for="state">استان :</label>
                    <select
                        @input="updateSelect"
                        class="
												dark:text-black
                            rounded
                            text-base
                            font-product
                            bg-gray-200 bg-clip-padding bg-no-repeat
                            transition
                            ease-in-out
                            mt-1
                            focus:text-gray-700
                            focus:bg-white
                            focus:border-blue-600
                            focus:outline-none
                            w-1/2
                        "
                        name="state"
                    >
                        <option
                            v-for="province in provinces"
                            :key="province"
                            :value="province.id"
                        >
                            {{ province.name }}
                        </option>
                    </select>
                    <label class="block mt-2" for="city">شهر :</label>
                    <select
                        class="
												dark:text-black
                            rounded
                            text-base
                            font-product
                            bg-gray-200 bg-clip-padding bg-no-repeat
                            transition
                            ease-in-out
                            mt-1
                            focus:text-gray-700
                            focus:bg-white
                            focus:border-blue-600
                            focus:outline-none
                            w-1/2
                            h-10
                        "
                        name="city"
                    >
                        <option
                            v-for="city in showProvinceCity"
                            :key="city"
                            :value="city"
                        >
                            {{ city }}
                        </option>
                    </select>
                    <label class=" block mt-2 mb-2" for="zipcode"
                        >کد پستی :
                    </label>
                    <input
                        class="dark:text-black mb-2 form-input w-3/4 rounded h-8 bg-gray-200"
                        type="number"
                        name="zipcode"
                    />
                </div>
                <div class="contactInfo">
                    <h2 class="text-xl dark:text-gray-200 font-bold p-1 mt-2">
                        نحوه برقراری ارتباط با شما
                    </h2>

                    <label class="block mt-2 mb-2" for="email">ایمیل :</label>
                    <input
                        class="dark:text-black h-8 rounded bg-gray-200 w-1/2"
                        type="email"
                        required
                    />
                    <label class="block mt-2 mb-2" for="phone"
                        >شماره تلفن :</label
                    >
                    <input
                        class="dark:text-black h-8 rounded form-input bg-gray-200 w-1/2 "
                        type="tel"
                    />
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    data() {
        return {
            myProvince: null,
            nameInput: null,
        }
    },
    computed: {
        ...mapState('provinces', ['provinces']),
        ...mapState('products', ['products']),
        ...mapState({
            provinciData: (state) => state.provinces.provinceSelect,
        }),
        ...mapState('basket', ['basketItems']),
        ...mapGetters('provinces', ['showProvinceCity']),
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
        updateSelect(e) {
            this.$store.commit('provinces/updateSelect', e.target.value)
        },
        ToRial(str) {
            str = str.toString().replace(/\,/g, '')
            var objRegex = new RegExp('(-?[0-9]+)([0-9]{3})')

            while (objRegex.test(str)) {
                str = str.replace(objRegex, '$1,$2')
            }

            return str
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

<style></style>
