// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const FirebaseConfig = () => {
    const firebaseParams = {
        apiKey: "AIzaSyDWkGb8SrpD1xvNV6bOc7hxKVHni6iiVEU",
        authDomain: "sourceshop-firebase.firebaseapp.com",
        projectId: "sourceshop-firebase",
        storageBucket: "sourceshop-firebase.appspot.com",
        messagingSenderId: "327971195427",
        appId: "1:327971195427:web:6cfe5b4dea77457c74ff96",
        measurementId: "G-8J26VW3W4X"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseParams);
      const firebaseAnalytics = getAnalytics(app);
      const firebaseAuth = getAuth(app);

      return {firebaseAnalytics,firebaseAuth}
}



