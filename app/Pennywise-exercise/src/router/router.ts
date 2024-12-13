import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// Definiendo las rutas con tipado de Typescript
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: { title: 'Home' },
    },
    {
        path: '/exercise-1',
        name: 'Exercise1',
        component: () => import('../views/exercise1.vue'),
        meta: { title: 'Elige Penywise' },
    },
    {
        path: '/exercise-2',
        name: 'Exercise2',
        component: () => import('../views/exercise2.vue'),
        meta: { title: 'Casa de los globos rojos' },
    },
    {
        path: '/exercise-3',
        name: 'Exercise3',
        component: () => import('../views/exercise3.vue'),
        meta: { title: 'La maldición de Derry' },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach((to) => {
    document.title = to.meta.title as string || 'Pennywise-Game';
});

export default router;