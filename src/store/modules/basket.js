export default {
    namespaced: true,
    state: () => ({
        selectedItems: [],
        basketItems: [],
        inputValue:{}
    }),

    getters: {
        //Change the Value of States
      
        
    },

    mutations: {
        //
        addToCounter(state, payload) {
            state.selectedItems.push(payload)
            console.log(state.selectedItems)

            const counts = {}
            for (let i = 0; i < state.selectedItems.length; i++) {
                if (counts[state.selectedItems[i].id]) {
                    counts[state.selectedItems[i].id] += 1
                } else {
                    counts[state.selectedItems[i].id] = 1
                }
            }
            //copying counts object to BasketItems
            for (let product in counts) {
                state.basketItems.push({ "id": parseInt(product), "qun": counts[product] })
                // if(state.basketItems.length > 4){
                // state.basketItems.shift()}

            }
            state.basketItems = state.basketItems.slice().reverse().filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
            console.log(state.basketItems)
        },
        updateCount(state,payload){
            // const findItems = state.basketItems.findIndex(x => (x.id === payload.id))
            // state.basketItems[findItems].qun = payload.qun
            console.log(payload)

        }
    },

    actions: {
        //
    },
}
