// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2uAhgUfOLYqdkLPHs3xqXM1VaeUveoeU",
  authDomain: "clone-db-7082f.firebaseapp.com",
  projectId: "clone-db-7082f",
  storageBucket: "clone-db-7082f.appspot.com",
  messagingSenderId: "1052205917274",
  appId: "1:1052205917274:web:445a8feaf1ef0ad569e463",
  measurementId: "G-G1HJB94SV9"
};

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

   export {db , auth};