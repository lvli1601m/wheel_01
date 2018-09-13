import  { getBrandList, getMakeList } from '../../api/index'
// 基本数据
let state = {
    flag: false,
    con:'',
    letters: [],
    brand: {},
    brandId: '',
    getMakeList: '',
    makeList: [],
    isShow: false
}
// 提交更改数据的方法，同步！
let mutations = {
    initState: (state, payload)=>{
        // 把数据处理一下
        let letters = [];
        let brand = {};
        payload.forEach((item)=>{
            let spell = item.Spelling[0];
            if(letters.indexOf(spell) != -1){
                brand[spell].push(item);
            }else{
                letters.push(spell);
                brand[spell] = [item];
            }
        });
        state.letters = letters;
        state.brand = brand;
    },
    changeMakeList:(state, payload)=>{
        state.makeList = payload.list;
        state.brandId = payload.id;
        state.isShow = true;
    }
}
//像一个装饰器，包裹mutations，使之可以异步
let actions = {
    initState: ({commit}, payload)=>{
        getBrandList().then(body=>{
            if(body.code == 1){
                commit('initState', body.data)
            }else{
                alert(body.msg);
            }
        }) 
    },
    getMakeList: ({commit}, payload)=>{
        if(payload != state.brandId){
            getMakeList(payload).then(body=>{
                commit('changeMakeList',{
                    id: payload,
                    list: body.data
                })
            })
        } 
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}
