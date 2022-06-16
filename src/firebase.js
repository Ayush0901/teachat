
import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyATe07GNWOcPjkma7hWUVt7ObFxbLnO-PM",
    authDomain: "teachat-59f5e.firebaseapp.com",
    projectId: "teachat-59f5e",
    storageBucket: "teachat-59f5e.appspot.com",
    messagingSenderId: "821143881552",
    appId: "1:821143881552:web:4a672cd5215790a41f0e55",
    measurementId: "G-B3Z45G1J5Y"
  }).auth()