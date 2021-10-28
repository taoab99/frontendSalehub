// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD0uOFHvjBKtDe6ejJA9hfVZgR2K9E57qg",
    authDomain: "blog-8f054.firebaseapp.com",
    projectId: "blog-8f054",
    storageBucket: "blog-8f054.appspot.com",
    messagingSenderId: "204184735110",
    appId: "1:204184735110:web:3b03a61716ed05038c7007",
    measurementId: "G-3DYSK4E6W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analyticss = getAnalytics(app);

export default analyticss;
