<template>
    <NavigationBar />
<!-- advertisement Slider -->

<vueper-slides autoplay  fade :arrows="false"  :touchable="true"  class="adv-slider no-shadow md:w-3/4 mx-auto p-3 mb-4 " arrows-inside bullets-inside transition-speed="250">
  <vueper-slide
    v-for="slide in slides"
    :key="slide.id"
    :content="slide.image"
   >

   
  </vueper-slide>
</vueper-slides>




<!-- product Slider -->
    <vueper-slides
        :arrows="false"
        class="no-shadow max-w-4xl mx-auto p-4"
        :touchable="true"
        fixed-height="500px"
        :visible-slides="3"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 2 } }"
    >
        <vueper-slide v-for="product in products" :key="product.id">
            <template #content>
                <ProductCard
                    :productTitle="product.title"
                    :productDes="product.detail"
                    :productPrice="ToRial(product.price)"
                    :productPic="product.picture"
                    @addingToBasket="
                        addToCounter(product);
                        notify()
                    "
                />
            </template>
        </vueper-slide>
    </vueper-slides>

    <!-- <div class="flex justify-center items-center flex-wrap h-screen">
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
        
    </div> -->

    <notifications :width="250" position="bottom left " class="text-center" />
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import ProductCard from './ProductCard.vue'
import { mapGetters, mapMutations, mapState } from 'vuex'
import NavigationBar from './NavigationBar.vue'
export default {
    components: {
        ProductCard,
        NavigationBar,
        VueperSlides,
        VueperSlide,
    },
    computed: {
        ...mapState('products', ['products']),
        ...mapState('basket', ['selectedItems']),
    },
    methods: {
        ...mapMutations('basket', ['addToCounter']),
       
        notify() {
            this.$notify({
                type: 'success',
                text: 'آیتم به سبد خرید اضافه شد',
            })
        },
        ToRial(str) {
            str.toString()
            str = str.replace(/\,/g, '')
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
    data(){
        return{
            slides:[
                {
                    id:0,
                    image:'<img src="../../assets/images/slides/98a06d45de142b379f6d236526aa9ada-shop-online-web-slider-design.jpeg" alt="">'
                },
                {
                    id:1,
                    image:'<img src="../../assets/images/slides/aa72abca784117244de372b5e9926988-online-shopping-slider-template.jpeg" alt="">'
                },
                {
                    id:2,
                    image:'<img src="../../assets/images/slides/eppi125_Slider_965x355-1200x441.jpeg" alt="">'
                }
            ]
        }
    }
}
</script>

<style>
/* :root.dark{
    background-color: white;
} */

.dark .vueperslides__arrow {
    color: white;
}
@media screen and (max-width: 800px) {
    .dark .vueperslides__arrow {
        color: black !important;
    }
    .vueperslides__arrow {
        color: black !important;
    }
}
.ex--center-mode {
  width: 600px;
  max-width: 100%;
  margin: auto;
}
</style>
