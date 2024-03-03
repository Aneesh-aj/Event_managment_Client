
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyB871xTk4TsvTSBFltmhvSiYtKy1kNxBeI",
  authDomain: "evento-a980a.firebaseapp.com",
  projectId: "evento-a980a",
  storageBucket: "evento-a980a.appspot.com",
  messagingSenderId: "183376073234",
  appId: "1:183376073234:web:6b5b61dc83fdc2aceb3ecb",
  measurementId: "G-T3G9JN3YBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseDB = getStorage(app)