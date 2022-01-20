export default {
    namespaced: true,
    state: () => ({
            selectedItems:[]
    }),

    getters: {
        //Change the Value of States
        addToBasketItem:(state) => (payload) =>{
            
        }
        
    },

    mutations: {
        //
        addToCounter(state,payload){
            state.selectedItems.push(payload)
            console.log(state.selectedItems)
        }
    },

    actions: {
        //
    },
}
