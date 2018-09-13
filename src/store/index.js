import Vue from 'vue'
import Vuex from 'vuex'
//import createLogger from 'vuex/dist/logger'
import Index from './modules/index'
import Details from './modules/details'
import Imgs from './modules/Img'
import Quotations from './modules/Quotation'
import Login from './modules/Login'
import city from './modules/city'
import Color from './modules/color'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Index,
        Details,
        Imgs,
        Quotations,
        Login,
        city,
        Color
    },
    // 日志
    //plugins: [createLogger()]
})