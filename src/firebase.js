import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBQbY2GYUGPfTQ82eg1DyGYYpnoN3G-mZM",
    authDomain: "disneyplus-clone-5a32f.firebaseapp.com",
    projectId: "disneyplus-clone-5a32f",
    storageBucket: "disneyplus-clone-5a32f.appspot.com",
    messagingSenderId: "585422162831",
    appId: "1:585422162831:web:0ee3d312fe653c8b9499fa",
    measurementId: "G-YJWFBHGKH8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;
  