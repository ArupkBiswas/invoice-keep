import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwccIlwbkfilxT9bNcjXCRrey78S67khQ",
    authDomain: "invoice-project-vue.firebaseapp.com",
    projectId: "invoice-project-vue",
    storageBucket: "invoice-project-vue.appspot.com",
    messagingSenderId: "939261201676",
    appId: "1:939261201676:web:a2096d5122fc78f6e10d29"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);


export default firebaseApp.firestore();