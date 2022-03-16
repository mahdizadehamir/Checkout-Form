import { faCity } from '@fortawesome/free-solid-svg-icons'
import cities from '/assets/json/cities.json'
import provinces from '/assets/json/provinces.json'
export default {
    namespaced: true,
    state: () => ({
        provinces:provinces,
        cities:cities,
        provinceId:null,
    }),

    getters: {
        //
        showProvinceCity:(state) => {
            console.log(state.provinceId)
            const matchcities = []
            for(let i=0;i < state.cities.length;i++){
                if(state.cities[i].province_id ===state.provinceId ){
                     matchcities.push( state.cities[i].name)
                     
                }
                else{
                    continue
                }
                
            }
            return matchcities
        }

    },

    mutations: {
        //
        updateSelect(state,payload){
            const provinceId = parseInt(payload)
            state.provinceId = provinceId
        }
    },

    actions: {
        //
    },
}