import VueRouter from "vue-router";
import bodyContainer from "@/components/bodyContainer.vue";
import homePage from "@/components/homePage.vue";
import databaseSetting from "@/components/databaseSetting.vue";
import setSetting from "@/components/setSetting.vue";
import downloadFiles from "@/components/downloadFiles";
import uploadFile from "@/components/uploadFile.vue";
import queryService from "@/components/queryService.vue";
import sqlAnalyze from "../components/sqlAnalyze.vue";
import performanceMetrics from '../components/performanceMetrics.vue'
import store from '../store'
export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: bodyContainer
        },
        {
            path: '/',
            component: homePage
        },
        {
            path: '/databaseSetting',
            component: databaseSetting,
            beforeEnter: (to, from, next) => {
                if (store.state.permission == 1) { //判断是否需要授权
                    next() //放行
                } else {
                    alert('你没有权限访问该页面') 
                }
            }

        },
        {
            path: '/setSetting',
            component: setSetting
        },
        {
            path: '/downloadFiles',
            component: downloadFiles
        },
        {
            path: '/uploadFile',
            component: uploadFile
        },
        {
            path: '/queryService',
            component: queryService
        },
        {
            path:'/sqlAnalyze',
            component:sqlAnalyze,
            beforeEnter: (to, from, next) => {
                if (store.state.permission == 1) { //判断是否需要授权
                    next() //放行
                } else {
                    alert('你没有权限访问该页面') 
                }
            }
        },
        {
            path:'/performanceMetrics',
            component:performanceMetrics,
            beforeEnter: (to, from, next) => {
                if (store.state.permission == 1) { //判断是否需要授权
                    next() //放行
                } else {
                    alert('你没有权限访问该页面') 
                }
            }
        }
    ],
    mode: 'history'
})