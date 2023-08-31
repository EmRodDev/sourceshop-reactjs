// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore,initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const FirebaseConfig = () => {
    const firebaseParams = {
      apiKey: "AIzaSyA-KaHAJB760OioCk9WRcdeVhpPgRt0ta8",
      authDomain: "source-shop-3946f.firebaseapp.com",
      projectId: "source-shop-3946f",
      storageBucket: "source-shop-3946f.appspot.com",
      messagingSenderId: "373162187388",
      appId: "1:373162187388:web:7366c9d5eb851155de07f9"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseParams);
      const firebaseAnalytics = getAnalytics(app);
      const firebaseAuth = getAuth(app);
      const db = initializeFirestore(app,{useFetchStreams: false});

      return {firebaseAnalytics,firebaseAuth,db}
}



