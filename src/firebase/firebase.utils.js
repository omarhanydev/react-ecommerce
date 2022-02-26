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

export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addtionalData
            });
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

// console.log(firestore.collection('users').doc('OpOrOUlfRORCzExhIPkx').collection('cartItems').doc('0vanTp7uuWathhCCDYTF'));
// console.log(firestore.doc('/users/OpOrOUlfRORCzExhIPkx/cartItems/0vanTp7uuWathhCCDYTF'));
// console.log(firestore.collection('/users/OpOrOUlfRORCzExhIPkx/cartItems'));

export default firebase;