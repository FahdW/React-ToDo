import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDNvWDat9GuexFu4QMajxdBm-tJjBnpNFM",
    authDomain: "todo-app-5d644.firebaseapp.com",
    databaseURL: "https://todo-app-5d644.firebaseio.com",
    storageBucket: "todo-app-5d644.appspot.com",
    messagingSenderId: "1040797306349"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
