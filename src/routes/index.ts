import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/Main.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/mypage',
        name: 'myPage',
        component: () => import('@/views/MyPage.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
