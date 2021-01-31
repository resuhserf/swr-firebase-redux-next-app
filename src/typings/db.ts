import firebase from 'firebase/app'
import 'firebase/firestore'

export type dbConfig = Parameters<typeof firebase.initializeApp>[0]
export type DocumentData = firebase.firestore.DocumentData
export type FieldPath = firebase.firestore.FieldPath
export type FieldValue = firebase.firestore.FieldValue
