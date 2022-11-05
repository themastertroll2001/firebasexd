// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA4NtBq4d954Wuh8CG_KXXCvkNCss-oI7U",
  authDomain: "auth-aed6d.firebaseapp.com",
  databaseURL: "https://auth-aed6d-default-rtdb.firebaseio.com",
  projectId: "auth-aed6d",
  storageBucket: "auth-aed6d.appspot.com",
  messagingSenderId: "639607441378",
  appId: "1:639607441378:web:76538bff5281e417019bbb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, projectStorage, projectFirestore, timestamp };

