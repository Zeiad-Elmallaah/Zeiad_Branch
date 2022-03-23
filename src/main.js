import {createApp} from 'vue';
import App from './App.vue';
import router from './router/routes';
import firebase from 'firebase/compat/app';
//import { firebaseConfig } from "../firestore"; //hides the key

const firebaseConfig = {
    apiKey: "AIzaSyD3VAUCiXfaaUUkTrEs0JDLzlf9X-5e2OA",
    authDomain: "gaminity-16316.firebaseapp.com",
    projectId: "gaminity-16316",
    storageBucket: "gaminity-16316.appspot.com",
    messagingSenderId: "484841273606",
    appId: "1:484841273606:web:82f4466f651d43e25fc687"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.mount("#app");