import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDNvWDat9GuexFu4QMajxdBm-tJjBnpNFM",
  authDomain: "todo-app-5d644.firebaseapp.com",
  databaseURL: "https://todo-app-5d644.firebaseio.com",
  storageBucket: "todo-app-5d644.appspot.com",
  messagingSenderId: "1040797306349"
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Fred',
    age: 27
  }
})

var todosRef = firebaseRef.child('todos');
todosRef.push({
  text: 'New todo'
});
todosRef.push({
  text: 'another one'
});

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.val());
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// })
//
// var newNoteRef = notesRef.push({
//   text: '!Walk the dog'
// });
//
// //console.log(newNoteRef.key);
