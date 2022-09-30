import {createRouter, createWebHistory} from "vue-router";

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('/src/views/Home.vue')
	},
	{
		path: '/welcome',
		name: 'Welcome',
		component: () => import('/src/views/Welcome.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: 'active',
	routes,
	scrollBehavior(to, from, savedPosition) {
		return savedPosition || {top: 0};
	},
});

export default router;
