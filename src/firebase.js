import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyApAkpCiEMRNbRKSVS2LY11t0KA4iNkjoA",
  authDomain: "todo-app-react-firebase-65969.firebaseapp.com",
  databaseURL: "https://todo-app-react-firebase-65969.firebaseio.com",
  projectId: "todo-app-react-firebase-65969",
  storageBucket: "todo-app-react-firebase-65969.appspot.com",
  messagingSenderId: "1039114982304",
  appId: "1:1039114982304:web:0a95654705886fe4d58ac5",
  measurementId: "G-TER6J14YFK",
});

const db = firebaseApp.firestore();

export default db;
