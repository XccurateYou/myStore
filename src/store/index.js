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
        state.ini_logging_collector = state.logging_collector
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
                state.max_connections = response.data.data.config[1].setting,
                    state.ini_max_connections = state.max_connections,
                    state.shared_buffers = response.data.data.config[2].setting,
                    state.ini_shared_buffers = state.shared_buffers,
                    state.logging_collector = response.data.data.config[0].setting,
                    state.ini_logging_collector = state.logging_collector
            }
            router.push(
                {
                    path: '/databaseSetting'
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
    ini_logging_collector: 'on',
    max_connections: '0',
    shared_buffers: '0',
    logging_collector: 'on',
    customer_list: [],
    nation_list: [],
    display_list:[],
    customer_select: 'null',
    nation_select: 'null',
    userPermission: '',
    currentPage: 1,  
    searchQuery: ''  ,
    averageLatency:'',
    totalRequestCount:'',
    concurrentRequests:'',
    totalProcessingTime:'',
    status:'',
    signUpName:'',
    signUpPassword:'',
    permission:0,
}


//创建store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})
