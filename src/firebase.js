import firebase from "firebase";
import * as firebaseui from 'firebaseui';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDCqdmu7X1LUEtxYhUW-UWP-mMTnLMluV4",
    authDomain: "peerstutorme.firebaseapp.com",
    databaseURL: "https://peerstutorme.firebaseio.com",
    projectId: "peerstutorme",
    storageBucket: "peerstutorme.appspot.com",
    messagingSenderId: "951347003954"
});
const ui = new firebaseui.auth.AuthUI(firebase.auth());
export {firebase,app,ui}