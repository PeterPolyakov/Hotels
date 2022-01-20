import { createApp } from 'vue'
import App from './App.vue';

import Home from './components/pages/Home.vue';
import Contacts from './components/pages/Contacts.vue';
import HotelDetails from './components/pages/HotelDetails.vue';
import About from './components/pages/About.vue';


import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/conacts', name: 'Contacts', component: Contacts },
    { path: '/hotels/:id', name: 'Hotel details', component: HotelDetails, props: true },
    { path: '/about', name: 'About', component: About },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


const app = createApp(App);

app.use(router);

app.mount('#app');
