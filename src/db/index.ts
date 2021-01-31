import { dbConfig } from '@typings/db'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Update firebase project configs herer
export const firebaseConfig = {
  apiKey: 'AIzaSyCLdhagt1Fpi-62eELzi_sKVEUZWpxGENQ',
  authDomain: 'alpha-a2b7f.firebaseapp.com',
  projectId: 'alpha-a2b7f',
  storageBucket: 'alpha-a2b7f.appspot.com',
  messagingSenderId: '716409364692',
  appId: '1:716409364692:web:2773ad62d7a6823cc8db41',
}

export class Fuego {
  public db: ReturnType<firebase.app.App['firestore']>
  public auth: typeof firebase.auth
  public functions: typeof firebase.functions
  public storage: typeof firebase.storage
  constructor(config: dbConfig) {
    this.db = !firebase.apps.length
      ? firebase.initializeApp(config).firestore()
      : firebase.app().firestore()
    this.auth = firebase.auth
    this.functions = firebase.functions
    this.storage = firebase.storage
  }
}

export const fbauth = firebase.auth
export const firestore = firebase.firestore
