import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import products from '../store/modules/products'
import basket from '../store/modules/basket'
import provinces from '../store/modules/provinces'
const store = createStore({
    modules: {
        products,basket,provinces
    },
    plugins : [createPersistedState()],
    state: ()=> ({
        ali : 0
    })
        
    
})

export default store
