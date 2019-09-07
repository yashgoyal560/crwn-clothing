import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAqjiwLarJsQyCZBM9R1HH-zdmUCk1j0Sk",
  authDomain: "yg-crwn-db.firebaseapp.com",
  databaseURL: "https://yg-crwn-db.firebaseio.com",
  projectId: "yg-crwn-db",
  storageBucket: "",
  messagingSenderId: "771794040211",
  appId: "1:771794040211:web:3d89a9baf3c3d2a76ca466"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = await firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    } catch (error) {
        console.log('error creating user',error.message);
        
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
