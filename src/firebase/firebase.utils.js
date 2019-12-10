import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDZHhug1xM1eF0_ohk5kgM7QZIphZSuS_c",
    authDomain: "clothing-db-e4f4d.firebaseapp.com",
    databaseURL: "https://clothing-db-e4f4d.firebaseio.com",
    projectId: "clothing-db-e4f4d",
    storageBucket: "clothing-db-e4f4d.appspot.com",
    messagingSenderId: "974418974282",
    appId: "1:974418974282:web:052161d74dbf8303fc78b3",
    measurementId: "G-H4FRSC6J8T"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
