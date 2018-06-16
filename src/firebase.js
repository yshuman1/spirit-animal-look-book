import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCmH93S1bYanvPYhh9UjE5-x43Mzl1dLKo",
  authDomain: "social-animals-25eec.firebaseapp.com",
  databaseURL: "https://social-animals-25eec.firebaseio.com",
  projectId: "social-animals-25eec",
  storageBucket: "social-animals-25eec.appspot.com",
  messagingSenderId: "1038146873747"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
