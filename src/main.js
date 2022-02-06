import { createApp } from 'vue'
import App from './App.vue';
import router from "./router/router.js";
import store from './store';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import components from "./components/UI";

const firebaseConfig = {
    apiKey: "AIzaSyBrKS_xucPxUSnozBzIsevM_jDDwz3htxc",
    authDomain: "hotels-1e8d2.firebaseapp.com",
    databaseURL: "https://hotels-1e8d2-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "hotels-1e8d2",
    storageBucket: "hotels-1e8d2.appspot.com",
    messagingSenderId: "279564725404",
    appId: "1:279564725404:web:9c76bbab1ffa339b6ad159",
    measurementId: "G-VYJLL10E17"
};

initializeApp(firebaseConfig);

const db = getDatabase();
const path = '/hotels';
const hotelsRef = ref(db, path);

onValue(hotelsRef, (snapshot) => {
    const hotelsObject = snapshot.val();
    console.log('onValue', hotelsObject);
    for (const [key, value] of Object.entries(hotelsObject)) {
        store.commit('hotels/addHotel', value, key);
    }
    // snapshot.val().forEach(item => store.commit('hotels/addHotel', item));
});

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (user) {
        store.commit('user/setUser', user);
    } else {
        store.dispatch('user/logout');
    }
});

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app.use(router);
app.use(store);
app.mount('#app');
