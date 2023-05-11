import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import("@/components/HomePage.vue")
    },
    {
        name: "SignUp",
        path: "/signup",
        component: () => import("@/components/SignUp.vue")
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("@/components/LoginPage.vue")
    },
    {
        name: "Add",
        path: "/add",
        component: () => import("@/components/AddPage.vue")
    },
    {
        name: "Update",
        component: () => import("@/components/UpdatePage.vue"),
        path: "/update/:id"
    }
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
