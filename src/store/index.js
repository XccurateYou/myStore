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

    changeloginstate(context) {
        context.commit('CHANGELOGINSTATE')
    },

    initialSetting() {
        state.ini_max_connections = Number(state.max_connections)
        state.ini_shared_buffers = Number(state.shared_buffers)
        state.ini_statement_timeout = Number(state.statement_timeout)
    },

    getinitialsetting() {
        axios({
            method: 'POST',
            url: 'http://10.129.152.215:8080/systemManagement/selectAll',
            data: {

            },
            headers: {
                'Content-Type': 'application/json',
                'token': 'zxc'
            }
        }).then(response => {
            if (response.data.data.config) {
                state.max_connections = response.data.data.config[0].setting,
                    state.shared_buffers = response.data.data.config[1].setting,
                    state.statement_timeout = response.data.data.config[2].setting
            }
            router.push(
                {
                    path: '/databaseSetting'
                }
            )
        })



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
            state.logintip = state.userName
            router.push(
                {
                    path: '/'
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
    userPassword: '',
    logintip: '请先登录',
    ini_max_connections: 0,
    ini_shared_buffers: 0,
    ini_statement_timeout: 0,
    max_connections: '0',
    shared_buffers: '0',
    statement_timeout: '0'
}

//创建store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
