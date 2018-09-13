import  { imgs, getImgList} from '../../api/index'
// 基本数据
let state = {
    imgData: [],
    imgList: {}
}
// 提交更改数据的方法，同步！
let mutations = {
    initState: (state, payload)=>{
        let reg = /(\{)([\d])(\})/g;
        payload.map(item => {
            item.List.map(val => {
                val.Url = val.Url.replace(reg, (a, b, c) => {
                return val.LowSize
                })
            })
        })
        state.imgData = payload;
    },
    imgItem: (state, payload)=>{ 
        console.log(payload)
        let reg = /(\{)([\d])(\})/g;
        payload.List.map(item => {
            item.Url = item.Url.replace(reg, (a, b, c) => {
            return item.LowSize
            })
        })
        state.imgList = payload
    }
}
//像一个装饰器，包裹mutations，使之可以异步
let actions = {
    imgs: ({commit}, payload)=>{
        imgs(payload).then(body=>{
             if(body.code == 1){
                 commit('initState', body.data)
             }else{
                 alert(body.msg);
             }
        }) 
    },
    getImgList({commit},payload){
        getImgList(payload.id,payload.imgId).then((res)=>{
            if(res.code == 1){
                commit('imgItem', res.data)
            }else{
                alert(res.msg);
            }
        })
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}
