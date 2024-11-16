// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, } from "firebase/firestore";
import { getAuth, type Auth, setPersistence, browserSessionPersistence } from "firebase/auth"; // Import Authentication functions


export default defineNuxtPlugin(async (nuxtApp) => {
    // Runtime config for env variables
    const config = useRuntimeConfig().public;

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: config.FB_API_KEY as string,
        authDomain: config.FB_AUTH_DOMAIN as string,
        projectId: config.FB_PROJECT_ID as string,
        storageBucket: config.FB_STORAGE_BUCKET as string,
        messagingSenderId: config.FB_MESSAGING_SENDER_ID as string,
        appId: config.FB_APP_ID as string,
        measurementId: config.FB_MEASUREMENT_ID as string,
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const analytics = getAnalytics(app);
    const db = getFirestore(app); 
    const auth: Auth = getAuth(app);

    // Set authentication SameSite=None and Secure third party applications
    try {
        await setPersistence(auth, browserSessionPersistence);
        console.log('Firebase Auth Persistence set to browserSessionPersistence');
    } catch (error) {
        console.error('Error setting persistence:', error);
    }

    // Provide firestore and auth in vue part of nuxt
    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('db', db)
    nuxtApp.provide('db', db)

})