export default {
    namespaced: true,
    state: () => ({
            selectedItems:[],
            dupi:[]
    }),

    getters: {
        //Change the Value of States
        findDuplicateItems:state =>{
            const counts ={}
            for (let i=0; i<state.selectedItems.length;i++){
                if(counts[state.selectedItems[i]]){
                    counts[state.selectedItems[i]] += 1
                    
                }
                else{
                    counts[state.selectedItems[i]] =1
                }
                state.dupi.push(counts[i])
            }
            
           
        }
        

        
    },

    mutations: {
        //
        addToCounter(state,payload){
            state.selectedItems.push(payload)
            console.log(state.selectedItems)
            

            const counts ={}
            for (let i=0; i<state.selectedItems.length;i++){
                if(counts[state.selectedItems[i]]){
                    counts[state.selectedItems[i]] += 1
                    
                }
                else{
                    counts[state.selectedItems[i]] =1
                }
                
            }
            
            const myobj = JSON.stringify(counts)
            console.log(myobj)


        }
    },

    actions: {
        //
    },
}
