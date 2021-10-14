import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAyx2Wl98UmhrZMSH0K-kYTE0_cw574jwE",
  authDomain: "appreact-40f44.firebaseapp.com",
  projectId: "appreact-40f44",
  storageBucket: "appreact-40f44.appspot.com",
  messagingSenderId: "830695512705",
  appId: "1:830695512705:web:07db7473975cea892ecb80"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
