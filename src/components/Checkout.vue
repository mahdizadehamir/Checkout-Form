<template>
    <div class="font-bold text-center mt-5">فروشگاه اینترنتی امیران</div>
    <div dir="rtl" class="flex flex-row p-4 justify-center mt-4 w-full">
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
            class="rounded p-2 border-2 bg-red-500 text-white"
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
    <div class="flex flex-row border-2 border-black mt-2 p-2 md:w-5/6 mx-auto">
        <div class="summary w-1/4 border-2 border-black"></div>
        <div dir="rtl" class="flex flex-row justify-around order w-3/4 border-2 border-black">
        <!-- first  column -->
            <div class="shippingInfo">
                <h2 class="font-bold mt-2 p-1">اطلاعات شناسایی و آدرس پستی</h2>
                <form class="mt-2 p-3" action="">
                    <label class="block" for="firstname"> نام:</label>
                    <input
                        class="mt-1 border-2 border-black w-40"
                        name="firstname"
                        type="text"
                    />
                    <label class="block mt-2" for="lastname"
                        >نام خانوادگی :</label
                    >
                    <input
                        type="text"
                        name="lastname"
                        class="mt-1 border-2 border-black w-40"
                    />
                    <label class="block mt-2" for="address"
                        >آدرس تحویل مرسوله :</label
                    >
                    <input
                        class="border-2 border-black"
                        type="text"
                        name="address"
                    />
                    <input
                        class="border-2 border-black block mt-2"
                        type="text"
                        placeholder="ادامه آدرس"
                    />
                    <label class="block mt-2" for="state">استان :</label>
                    <select @input="updateSelect" class="mt-1" name="state">
                        <option
                            v-for="province in provinces"
                            :key="province"
                            :value="province.id"
                        >
                            {{ province.name }}
                        </option>
                    </select>
                    <label class="block mt-2" for="city">شهر :</label>
                    <select name="city">
                        <option
                            v-for="city in showProvinceCity"
                            :key="city"
                            :value="city"
                        >
                            {{ city }}
                        </option>
                    </select>
                    <label class="block mt-2" for="zipcode">کد پستی : </label>
                    <input type="number" name="zipcode" />
                    
                    
                </form>
            </div>
            <div class="contactInfo">
                <h2 class="font-bold p-1 mt-2">نحوه برقراری ارتباط با شما</h2>
                <form action="">
                    <label class="block mt-2" for="email">ایمیل :</label>
                    <input type="email" />
                    <label class="block mt-2" for="phone">شماره تلفن :</label>
                    <input type="number" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
    data() {
        return {
            myProvince: null,
        }
    },
    computed: {
        ...mapState('provinces', ['provinces']),
        ...mapState({
            provinciData: (state) => state.provinces.provinceSelect,
        }),
        ...mapGetters('provinces', ['showProvinceCity']),
    },
    methods: {
        updateSelect(e) {
            this.$store.commit('provinces/updateSelect', e.target.value)
        },
    },
}
</script>

<style></style>
