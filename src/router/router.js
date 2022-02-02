import { createWebHistory, createRouter } from "vue-router";

import Home from '@/components/pages/Home.vue';
import Hotels from '@/components/pages/Hotels.vue';
import Tickets from '@/components/pages/Tickets.vue';
import Rest from '@/components/pages/Rest.vue';
import Auth from '@/components/pages/Auth.vue';
import HotelDetails from '@/components/pages/HotelDetails.vue';
import About from '@/components/pages/About.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/hotels', name: 'Hotels', component: Hotels },
    { path: '/tickets', name: 'Tickets', component: Tickets },
    { path: '/rest', name: 'Rest', component: Rest },
    { path: '/auth', name: 'Auth', component: Auth },
    { path: '/hotel/:id', name: 'Hotel details', component: HotelDetails, props: true },
    { path: '/about', name: 'About', component: About },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;