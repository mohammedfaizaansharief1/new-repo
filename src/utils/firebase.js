// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkh196K9DM7MLl65_dm6NlyYSQ9-zgx30",
  authDomain: "yt-demo-9b535.firebaseapp.com",
  projectId: "yt-demo-9b535",
  storageBucket: "yt-demo-9b535.appspot.com",
  messagingSenderId: "456761763185",
  appId: "1:456761763185:web:49140950b73852debbc2d0",
  measurementId: "G-C3L2SWKGF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// console.log(analytics)
export const auth = getAuth()