import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { setDoc } from "firebase/firestore"; 



// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBqP5ktQBBdFpiLM4AEgU78OmEM4MZjWDM",
    authDomain: "noronha-clothing-db.firebaseapp.com",
    projectId: "noronha-clothing-db",
    storageBucket: "noronha-clothing-db.appspot.com",
    messagingSenderId: "55898389409",
    appId: "1:55898389409:web:9b13d914cfc24c4a1829e0",
    measurementId: "G-HJQ2WEX8PM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

//signin with google
const provider = new GoogleAuthProvider();
// console.log('provider',provider);

export const auth = getAuth();
// console.log('auth', auth);

export const signInWithGoogle = () => signInWithPopup(auth, provider)

export const createNewUserInDB = async (user) => {
  try {
        // Reference the user document in the Firestore database
        const docRef = doc(db, "users", user.uid);
        
        // Fetch the document snapshot
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          console.log("Document Found!");
          
          // You can set the document data in the state or perform other actions here
        } else {
          console.log("No such document!")

          try {
             await setDoc(docRef, {
              displayName: user.displayName,
              email: user.email,
              createdAt: new Date()
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }
      } catch (error) {
        console.error("Error fetching document:", error);
    }
}