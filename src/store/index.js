import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import products from '../store/modules/products'
import basket from '../store/modules/basket'

const store = createStore({
    modules: {
        products,basket
    },
    plugins : [createPersistedState()]
})

export default store
