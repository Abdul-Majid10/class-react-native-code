// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWKPoaHnTF98BZ3hWbBI67hNoVAfT6Yas",
    authDomain: "reactnative-class-code.firebaseapp.com",
    projectId: "reactnative-class-code",
    storageBucket: "reactnative-class-code.appspot.com",
    messagingSenderId: "179732554029",
    appId: "1:179732554029:web:61ae913a4865c89d1e33a4",
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);

initializeAuth(fireApp, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export default fireApp;
