import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Manage',
        component: () => import('../views/Manage.vue'),
        redirect: '/home',
        children: [
            // { path: 'person', name: '个人信息', component: () => import('../views/Person.vue') },
            { path: 'home', name: '首页', component: () => import('../views/Home.vue') },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    localStorage.setItem("currentPathName", to.name)  // 设置当前的路由名称，为了在Header组件中去使用
    // 其他的情况都放行
    next()  // 放行路由
})

export default router