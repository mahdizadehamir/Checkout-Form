import { createStore } from 'vuex'
import products from '../store/modules/products'
import basket from '../store/modules/basket'
const store = createStore({
    modules: {
        products,basket
    },
    
})

export default store
