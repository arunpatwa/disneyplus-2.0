import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnap3z6M7SDt7xxewUFj1Jl92CB72-c_0",
  authDomain: "disneyplus-clone-arun.firebaseapp.com",
  projectId: "disneyplus-clone-arun",
  storageBucket: "disneyplus-clone-arun.appspot.com",
  messagingSenderId: "294074400473",
  appId: "1:294074400473:web:1d831be0fef172c60688c8",
  measurementId: "G-GD2YDVF10W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
