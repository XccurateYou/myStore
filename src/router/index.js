import VueRouter from "vue-router";
import homePage from "@/components/homePage.vue";
import bodyContainer from "@/components/bodyContainer.vue";
import customerLayout from "../components/customerLayout.vue"
import hotelForward from "../components/hotelForward.vue"
import userIn from "../components/userIn.vue"
import acMonitor from "@/components/acMonitor.vue"
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
            path: '/customerLayout',
            component: customerLayout,

        },
        {
            path: '/hotelForward',
            component: hotelForward,
            children: [
                {
                    path: '/hotelForward/userIn',
                    component: userIn
                }
            ]
        },
        {
            path: '/acMonitor',
            component: acMonitor,
        }
    ],
    mode: 'history'
})