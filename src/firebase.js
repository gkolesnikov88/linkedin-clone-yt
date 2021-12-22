import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDOuR577rRzlKfTmTzkzhZEjZXr1Rf-wbY",
    authDomain: "linkedin-clone-yt-1322f.firebaseapp.com",
    projectId: "linkedin-clone-yt-1322f",
    storageBucket: "linkedin-clone-yt-1322f.appspot.com",
    messagingSenderId: "152946833581",
    appId: "1:152946833581:web:aaf8561dfda7fff7c1ee24"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
