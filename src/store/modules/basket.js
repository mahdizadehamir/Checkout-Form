export default {
    namespaced: true,
    state: () => ({
        selectedItems: [],
        basketItems: [],
    }),

    getters: {
        //Change the Value of States
        priceCalculator: (state) => {},
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
    },

    actions: {
        //
    },
}
