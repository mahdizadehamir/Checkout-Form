import { createStore } from 'vuex'
import products from '../store/modules/products'

const store = createStore({
    modules: {
        products,
    },
})

export default store
