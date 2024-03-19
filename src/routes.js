import {createRouter, createWebHashHistory} from "vue-router";
const routerHistory = createWebHashHistory();

import home_page from "./pages/home_page.vue"

const routers = createRouter({
    history: routerHistory,
    routes:[
        {
            path: "/",
            name:"home",
            component: home_page
        }
    ]
})

export default routers;