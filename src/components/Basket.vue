<template>
    <div class="flex flex-col items-baseline flex-wrap min-h-screen">
        <div class="w-full " v-for="item in basketItems" :key="item.id">
            <BasketCard
                :productDetail="products[item.id].detail"
                :productPicture="products[item.id].picture"
                :productTitle="products[item.id].title"
                :productPrice="toFarsiNumber(products[item.id].price)"
                :count="item.qun"
                :totalPrice="toFarsiNumber(item.qun * products[item.id].price)"
                @updateCount="item.qun = $event.target.value "
                @trashButton="deleteItem(item)"
            />
        </div>
    </div>
</template>

<script>
import BasketCard from './BasketCard.vue'
import { mapGetters, mapState } from 'vuex'

export default {
    components: { BasketCard },
    data(){
        return{
        counter: {}
        }
    },
    computed: {
        ...mapState('products', ['products']),
        ...mapState('basket', ['basketItems']),
        ...mapGetters('basket',['deleteItem']),
       
    },
    methods:{
    toFarsiNumber(n) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return n
      .toString()
      .split('')
      .map(x => farsiDigits[x])
      .join('');
  },
  
  
    }
}
</script>

<style></style>
