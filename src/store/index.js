import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
import router from '../router/index'
//响应组件中动作
const actions = {


    userIn(context) {
        context.commit("USERIN")
    },
    userOut(context) {
        context.commit("USEROUT")
    },
    powerState(context) {
        context.commit("POWERSTATE")
    },
    sendAxiosLogin() {
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
    },
    sendAxiosCheckIn() {
        axios({
            method: 'POST',
            url: 'http://10.129.152.215:8080/front/checkIn',
            data: {
                cusId: state.customerID,
                roomId: state.roomID
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(JSON.stringify(response.data.msg))
            state.logintip = state.customerID
        })
    },
    sendAxiosConfig() {
        axios({
            method: 'POST',
            url: 'http://10.129.152.215:8080/front/checkIn',
            data: {
                isOpen: state.isOpen,
                roomId: state.roomID,
                cusId: state.customerID
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(JSON.stringify(response.data.msg))
            state.logintip = state.customerID
        })
    },
    sendAxiosCheckOut() {
        axios({
            method: 'POST',
            url: 'http://10.129.152.215:8080/front/checkOut',
            data: {
                cusId: state.customerID,
                roomId: state.roomID
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(JSON.stringify(response.data.msg))
        })
    }
}



//加工数据
const mutations = {
    USERIN(state) {
        state.isActive = 1
    },
    USEROUT(state) {
        state.isActive = 0
    },
    POWERSTATE(state) {
        state.powerActive = !state.powerActive
        axios({
            method: 'POST',
            url: 'http://10.129.152.215:8080/customer/changeStatus',
            data: {
                isOpen: state.isOpen,
                roomId: state.roomID,
                cusId: state.customerID
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(JSON.stringify(response.data.msg))
        })
    }
}

//存储数据
const state = {
    isActive: 1,
    logintip: '请先登录',
    powerActive: 0,
    customerID: '',
    roomID: '',
    password: '',
    IDnumber: '',
    isOpen: true,
}

//创建store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
