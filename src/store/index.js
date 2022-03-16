import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import products from '../store/modules/products'
import basket from '../store/modules/basket'
import stateAndprovinces from '../store/modules/stateAndprovinces'
const store = createStore({
    modules: {
        products,basket,stateAndprovinces
    },
    plugins : [createPersistedState()],
    state: ()=> ({
        ali : 0
    })
        
    
})

export default store
