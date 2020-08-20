import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBcQ2Sje20E52hANqpHGnYJRRJXbjk51_0",
  authDomain: "firegram-5aa4b.firebaseapp.com",
  databaseURL: "https://firegram-5aa4b.firebaseio.com",
  projectId: "firegram-5aa4b",
  storageBucket: "firegram-5aa4b.appspot.com",
  messagingSenderId: "1074671478210",
  appId: "1:1074671478210:web:d8f7e71423bfba93daa25b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
