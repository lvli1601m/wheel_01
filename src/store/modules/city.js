import { getCityList } from "../../api/index";
let state = {
    list : [],
    locationCity : '',
    provinces : [],
    cities : [],
    isShowCity : false
};
let getters = {};

let mutations = {
    updateProvinces(state,payload){
        state.provinces = payload.data
    },
    updateCitied(state,payload){
        state.cities = payload.data
        state.isShowCity = true
    },
    showRransform(state,payload){
        state.isShowCity = !payload
    }
};
let actions = {
    CityList({commit},payload){
        if(payload){
            getCityList(payload)
            .then(body=>{
                commit('updateCitied',body)
            })
        }else{
            getCityList()
            .then(body=>{
                commit('updateProvinces',body)
            })
        }
    }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
