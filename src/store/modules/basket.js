export default {
    namespaced: true,
    state: () => ({
        selectedItems: [],
        basketItems: [],
        counter: {},
        allPrice:{}
    }),
    // getters is change the value of States but its Temporary
    getters: {
       calculateAllPrice:(state)=> {
           let allAllPrice = 0;
        for(let j=0; j<state.selectedItems.length ; j++){
            for (let i=0 ; i<state.basketItems.length ; i++){
          if(state.selectedItems[j].id === state.basketItems[i].id ){
              allAllPrice += state.basketItems[i].qun * state.selectedItems[j].price
              console.log(allAllPrice)
          }              

           }
       }
       return allAllPrice
    }
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
        deleteItem(state,payload){
            const findElementId = (element) => {
                return element.id === payload.id
            }
            
            const elementId = state.basketItems.findIndex(findElementId)
            state.basketItems.splice(elementId, 1)
            state.selectedItems.splice(0,state.selectedItems.length)
        }
    },

    actions: {
        //
    },
}
