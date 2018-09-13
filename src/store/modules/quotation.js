import { getDealerList } from "../../api/index";
let state = {
    list : [],
    details : [],
    isShowCity : false,
    currentCity : ''
};
let getters = {};

let mutations = {
    officialList(state,payload){
        state.list = payload.list;
        state.details = payload.details
    },
    showCity(state,payload){
        state.isShowCity = payload
    }
};
let actions = {
    official({commit},payload){
        getDealerList(payload).then(body=>{
            if(body.code == 1){
                commit('officialList', body.data)
            }else{
                alert(body.msg);
            }
        }) 
    }
};

export default {
  namespaced: true,
  state,
  getters,                                                                                          
  mutations,
  actions
};
