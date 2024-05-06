import VueRouter from "vue-router";
import bodyContainer from "@/components/bodyContainer.vue";
import homePage from "@/components/homePage.vue";
import databaseSetting from "@/components/databaseSetting.vue";
import setSetting from "@/components/setSetting.vue";
import importFiles from "@/components/importFiles.vue";
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
            path: '/importFiles',
            component: importFiles
        }
    ],
    mode: 'history'
})