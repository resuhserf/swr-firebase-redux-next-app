import { dbConfig } from '@typings/db'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export const firebaseConfig = {
  // Put firebase project configs here
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
