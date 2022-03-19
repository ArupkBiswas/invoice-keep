import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
//import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1466aUHrkbShiSjXwf0M_BAlOYu3dFV4",
    authDomain: "invoice-keep.firebaseapp.com",
    projectId: "invoice-keep",
    storageBucket: "invoice-keep.appspot.com",
    messagingSenderId: "233523232179",
    appId: "1:233523232179:web:e5645eca468fd20f961fc6"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //const app = initializeApp(firebaseConfig);


export default firebaseApp.firestore();