'use strict'

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyAA0tmxwqWvvAV_PjQCwmu54m9EZ7bSz14',
  authDomain: 'reactflix-b5d4b.firebaseapp.com',
  databaseURL: 'https://reactflix-b5d4b.firebaseio.com',
  projectId: 'reactflix-b5d4b',
  storageBucket: 'reactflix-b5d4b.appspot.com',
  messagingSenderId: '415156819896'
})

const db = firebase.database()

export { db }
