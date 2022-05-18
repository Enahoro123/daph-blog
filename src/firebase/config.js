import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBWAJIlIuYMa2f0RszEXX15VWt_SJEXSnA",
    authDomain: "daph-blog.firebaseapp.com",
    projectId: "daph-blog",
    storageBucket: "daph-blog.appspot.com",
    messagingSenderId: "930533664067",
    appId: "1:930533664067:web:71115db5509c12c4be3bf6"
  };


  // init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const projectStorage = firebase.storage()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export firestore
export { projectAuth, projectFirestore, timestamp }