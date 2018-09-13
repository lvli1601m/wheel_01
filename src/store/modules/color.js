import  { imgList} from '../../api/index'
// 基本数据
let state = {
    imgDate: []
}
// 提交更改数据的方法，同步！
let mutations = {
    initState: (state, payload)=>{
        console.log(payload)
        state.imgData = payload;
        console.log(state.imgData)
        //console.log(payload)
    }
}
//像一个装饰器，包裹mutations，使之可以异步
let actions = {
    imgList: ({commit}, payload)=>{
        imgList(payload).then(body=>{
             if(body.code == 1){
                 commit('initState', body.data)
             }else{
                 alert(body.msg);
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
