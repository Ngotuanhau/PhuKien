/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import store from "./store";

import Home from "./views/Home.vue";
import SignUp from "./views/Auth/SignUp.vue";
import Login from "./views/Auth/Login.vue";
import ResetPass from "./views/Auth/ResetPass";
import ChangePass from "./views/Auth/ChangePass";

import Manage from "./views/AdminLayout/Manage.vue";

import About from "./views/GuestLayout/About.vue";
import Me from "./views/GuestLayout/Me.vue";

Vue.use(Router);

let router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            component: {
                render: h => h("router-view")
            },
            children: [{
                    path: "/",
                    name: "home",
                    component: Home
                },
                {
                    path: "/guest",
                    meta: {
                        requiresAuth: true,
                        roles: ["user"]
                    },
                    children: [{
                            path: "/about",
                            name: "about",
                            component: About
                        },
                        {
                            path: "/me",
                            name: "me",
                            component: Me
                        }
                    ]
                },
                {
                    path: "/admin",
                    meta: {
                        requiresAuth: true,
                        roles: ["admin"]
                    },
                    children: [{
                        path: "/manage",
                        name: "manage",
                        component: Manage
                    }]
                }
            ]
        },
        {
            path: "/sign_up",
            name: "sign_up",
            component: SignUp
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/reset_pass",
            name: "reset_pass",
            component: ResetPass
        },
        {
            path: "/change_pass/:token/:email",
            name: "change_pass",
            component: ChangePass
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const authUser = store.state.Auth.user;
        if (store.getters.isAuthenticated) {
            if (!to.meta.roles) {
                return next();
            }
            if (to.meta.roles.includes(authUser.role)) {
                switch (authUser.role) {
                    case "user":
                        next({ path: "/guest" });
                        break;
                    case "admin":
                        next({ path: "/admin" });
                        break;
                    default:
                        next({ path: "/" });
                }
            }
        }
    }
    return next();
});

export default router;