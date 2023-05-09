import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCpbEu2Dqf_xFaEmwLzjih7k_Ii9wt8XZM",
  authDomain: "react1finals.firebaseapp.com",
  projectId: "react1finals",
  storageBucket: "react1finals.appspot.com",
  messagingSenderId: "46476950666",
  appId: "1:46476950666:web:358262afe6d6da49830173"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();