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
        <div class="sammary w-1/4 border-2 border-black"></div>
        <div dir="rtl" class="order w-3/4 border-2 border-black">
            <h2 class="font-bold p-1">اطلاعات شناسایی و آدرس پستی</h2>
            <form class="mt-2 p-3" action="">
                <label class="block" for="firstname"> نام:</label>
                <input
                    class="mt-1 border-2 border-black w-40"
                    name="firstname"
                    type="text"
                />
                <label class="block mt-2" for="lastname">نام خانوادگی :</label>
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
                <select v-model="myProvince" class="mt-1" name="state">
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
                        v-for="city in provinceCities"
                        :key="city"
                        :value="city"
                    >
                        {{ city }}
                    </option>
                </select>
            </form>
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
        provinceCities: function () {
            const thisStor = Object.entries(
                this.$store.state.provinces.provinces
            )
            let myCity = null
             for (let i = 0; i < thisStor.length; i++) {
                if (thisStor[i][1].id === this.myProvince) {
                    
                   return myCity = thisStor[i][1].cities
                   
                   
                }else{
                    continue
                }
            }
            return (myCity)
        },
    },
    methods: {
        ...mapGetters('provinces', ['findOb']),
    },
}
</script>

<style></style>
