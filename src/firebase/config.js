import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFBB0g_lT_CO3MidkmxxFsCN1gdtQK-30",
    authDomain: "olx-clone-568e2.firebaseapp.com",
    projectId: "olx-clone-568e2",
    storageBucket: "olx-clone-568e2.appspot.com",
    messagingSenderId: "100865377668",
    appId: "1:100865377668:web:4ecc572c120265f26389d1",
    measurementId: "G-B6XYBL0K9Z"
  };

  export default firebase.initializeApp(firebaseConfig)