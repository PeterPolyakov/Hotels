import { createApp } from 'vue'
import App from './App.vue';
import router from "./router/router.js";
import store from './store';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { initializeApp } from "firebase/app";

import components from "./components/UI";



const firebaseConfig = {
    apiKey: "AIzaSyBrKS_xucPxUSnozBzIsevM_jDDwz3htxc",
    authDomain: "hotels-1e8d2.firebaseapp.com",
    projectId: "hotels-1e8d2",
    storageBucket: "hotels-1e8d2.appspot.com",
    messagingSenderId: "279564725404",
    appId: "1:279564725404:web:9c76bbab1ffa339b6ad159",
    measurementId: "G-VYJLL10E17"
};

initializeApp(firebaseConfig);

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app.use(router);
app.use(store);
app.mount('#app');
