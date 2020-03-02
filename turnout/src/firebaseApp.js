import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyASEv94ZKAg6ZJP3aT58x7w63LDfp0US-0",
    authDomain: "turnout-1308.firebaseapp.com",
    databaseURL: "https://turnout-1308.firebaseio.com",
    projectId: "turnout-1308",
    storageBucket: "turnout-1308.appspot.com",
    messagingSenderId: "237724366665",
    appId: "1:237724366665:web:f3a0da9b207425d70d0c98",
    measurementId: "G-4L7NG41QH7"
  };

  export const firebaseApp = firebase.initializeApp(config)
  export const eventsRef = firebaseApp.database().ref().child('events')