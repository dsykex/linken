import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAIcvfYspNPfT0pnSZR3qV8WcBrH3S3hyY",
    authDomain: "linken-25010.firebaseapp.com",
    databaseURL: "https://linken-25010.firebaseio.com",
    projectId: "linken-25010",
    storageBucket: "linken-25010.appspot.com",
    messagingSenderId: "928580850321",
    appId: "1:928580850321:web:36dcc200d4193237"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();