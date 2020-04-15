import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC1GZdg0gpsbJ1_PpErMMr9NQ1FnHzjdc4",
  authDomain: "shopey-db.firebaseapp.com",
  databaseURL: "https://shopey-db.firebaseio.com",
  projectId: "shopey-db",
  storageBucket: "shopey-db.appspot.com",
  messagingSenderId: "192075200898",
  appId: "1:192075200898:web:23152a9b5253642b1f779b",
  measurementId: "G-XESCWW9FHJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
