export default {
    namespaced: true,
    state: () => ({
        selectedItems: [],
        basketItems: [],
        counter: {},
        totalPrice:0
    }),
    // getters is change the value of States but its Temporary
    getters: {
        
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
                state.basketItems.push({
                    id: parseInt(product),
                    qun: counts[product],
                })
            }
            state.basketItems = state.basketItems
                .slice()
                .reverse()
                .filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i)
                .reverse()
            console.log(state.basketItems)
        },
        deleteItem(state, payload) {
            const findElementId = (element) => {
                return element.id === payload.id
            }

            const elementId = state.basketItems.findIndex(findElementId)
            state.basketItems.splice(elementId, 1)
            state.selectedItems.splice(0, state.selectedItems.length)
            // window.history.pushState({},'',"/")
        },
        changeCount(state, payload) {
            state.basketItems[payload[0]].qun = payload[1]
        },
      

    },

    actions: {
        //
    },
}
