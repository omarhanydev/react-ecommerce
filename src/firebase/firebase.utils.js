import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDjJ2tTgYqvrIl1RmTuTW98GUhwslS7Nf4",
    authDomain: "react-crwn-db-dd7dc.firebaseapp.com",
    projectId: "react-crwn-db-dd7dc",
    storageBucket: "react-crwn-db-dd7dc.appspot.com",
    messagingSenderId: "490608180145",
    appId: "1:490608180145:web:93e3b38891379b87659b90",
    measurementId: "G-E36GGJZNNC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;