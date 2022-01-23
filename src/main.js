import { createApp } from 'vue'
import App from './App.vue';
import { createWebHistory, createRouter } from "vue-router";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import Home from './components/pages/Home.vue';
import Hotels from './components/pages/Hotels.vue';
import Tickets from './components/pages/Tickets.vue';
import Rest from './components/pages/Rest.vue';
import Auth from './components/pages/Auth.vue';
import HotelDetails from './components/pages/HotelDetails.vue';
import About from './components/pages/About.vue';

const routes = [
    { path: '/home', name: 'Home', component: Home },
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

const app = createApp(App);
app.use(router);

app.mount('#app');
