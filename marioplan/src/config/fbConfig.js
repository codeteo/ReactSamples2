import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAwIiY9KLshExj_vtGJkTJESBk1vG63Q40",
  authDomain: "net-ninja-mariopan.firebaseapp.com",
  databaseURL: "https://net-ninja-mariopan.firebaseio.com",
  projectId: "net-ninja-mariopan",
  storageBucket: "net-ninja-mariopan.appspot.com",
  messagingSenderId: "171880948401"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
