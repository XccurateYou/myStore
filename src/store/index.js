import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
import router from '../router/index'
//响应组件中动作
const actions = {
    change(context) {
        context.commit('CHANGE')
    },
    sendlog() {
        axios({
            method: 'POST',
            url: 'http://10.129.152.215:8080/userManagement/logIn',
            data: {
                account: state.userName,
                password: state.userPassword
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(JSON.stringify(response.data.msg))
            router.push(
                {
                    path: '/test'
                }
            )
        })
    }
}

//加工数据
const mutations = {
    CHANGE(state) {
        state.isActive = !state.isActive
    }
}

//存储数据
const state = {
    isActive: false,
    userName: '',
    userPassword: ''
}

//创建store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
