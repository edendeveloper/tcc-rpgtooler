const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyA5IKZkbLtl62c3E5cJsNIrKsGRo0pzCkA",
    authDomain: "tcc-rpgtooler.firebaseapp.com",
    databaseURL: "https://tcc-rpgtooler.firebaseio.com",
    projectId: "tcc-rpgtooler",
    storageBucket: "tcc-rpgtooler.appspot.com",
    messagingSenderId: "10500260634",
    appId: "1:10500260634:web:31ce7ae8b1b7d85d9762a3",
    measurementId: "G-KTHWBYYSCP"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp