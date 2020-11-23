import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDjtWFjqgyGo9NivYkDgH1hO6DDgFHQKWQ',
  authDomain: 'clone-905ad.firebaseapp.com',
  databaseURL: 'https://clone-905ad.firebaseio.com',
  projectId: 'clone-905ad',
  storageBucket: 'clone-905ad.appspot.com',
  messagingSenderId: '985728414166',
  appId: '1:985728414166:web:71ba8a0e598ae528967477',
  measurementId: 'G-5DRS8ZXMSP'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
