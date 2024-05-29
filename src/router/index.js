import VueRouter from "vue-router";
import bodyContainer from "@/components/bodyContainer.vue";
import homePage from "@/components/homePage.vue";
import databaseSetting from "@/components/databaseSetting.vue";
import setSetting from "@/components/setSetting.vue";
import downloadFiles from "@/components/downloadFiles";
import uploadFile from "@/components/uploadFile.vue";
import queryService from "@/components/queryService.vue";
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
        }
    ],
    mode: 'history'
})