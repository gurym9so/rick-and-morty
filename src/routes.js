import {createRouter, createWebHashHistory} from "vue-router";
const routerHistory = createWebHashHistory();

import home from "./pages/home.vue"

const routers = createRouter({
    history: routerHistory,
    routes:[
        {
            path: "/",
            name:"home",
            component: home
        }
    ]
})

export default routers;