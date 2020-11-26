import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: 'AIzaSyD0vOS5_-pCdY5IpCq-XqTFavqcnTs49C0',
  authDomain: 'hiddenvalleykings-a6ead.firebaseapp.com',
  databaseURL: 'https://hiddenvalleykings-a6ead.firebaseio.com',
  projectId: 'hiddenvalleykings-a6ead',
  storageBucket: 'hiddenvalleykings-a6ead.appspot.com',
  messagingSenderId: '827809100083',
  appId: '1:827809100083:web:12c5d9b1198d61d7078e46'
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
