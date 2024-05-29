import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)
// import router from '../router/index'
//响应组件中动作
const actions = {

    changeloginstate(context) {
        context.commit('CHANGELOGINSTATE')
    },

}

//加工数据
const mutations = {

}

//存储数据
const state = {

    logintip: '请先登录',
}

//创建store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
