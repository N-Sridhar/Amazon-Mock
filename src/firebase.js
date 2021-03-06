import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPSRP5kDEuMFs0yTDts3QKRreL1ThTu3w",
  authDomain: "amzn-mock.firebaseapp.com",
  databaseURL: "https://amzn-mock.firebaseio.com",
  projectId: "amzn-mock",
  storageBucket: "amzn-mock.appspot.com",
  messagingSenderId: "849792183869",
  appId: "1:849792183869:web:9d5a0e9103630983e08454",
  measurementId: "G-GLC5DJW13D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
