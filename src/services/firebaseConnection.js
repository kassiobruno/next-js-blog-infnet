import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

let firebaseConfig = {
  apiKey: "AIzaSyDpD1EWpt9pPo3erHRAUg5Beaihn8lWJnY",
  authDomain: "blog-devspace.firebaseapp.com",
  projectId: "blog-devspace",
  storageBucket: "blog-devspace.appspot.com",
  messagingSenderId: "301865409949",
  appId: "1:301865409949:web:d4e31265064faf140d6374",
  measurementId: "G-96RX5SC3VM"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;