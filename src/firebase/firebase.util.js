import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config ={
    apiKey: "AIzaSyBqP5ktQBBdFpiLM4AEgU78OmEM4MZjWDM",
    authDomain: "noronha-clothing-db.firebaseapp.com",
    projectId: "noronha-clothing-db",
    storageBucket: "noronha-clothing-db.appspot.com",
    messagingSenderId: "55898389409",
    appId: "1:55898389409:web:9b13d914cfc24c4a1829e0",
    measurementId: "G-HJQ2WEX8PM"
};

firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore = firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;