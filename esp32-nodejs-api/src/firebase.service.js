// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getFirestore,
    query,
    collection,
    getDocs
  } from 'firebase/firestore';

import { firebaseConfig } from "./firebase.config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export class FirebaseService {
    constructor() {}

    async getMorse() {
        console.log('getMorse function invoked');
        const q = query(collection(db, "morse"));
        let all = await getDocs(q);
        try {
            return all.docs.map( x => { return {id:x.id,data:x.data()} })[0];
        } catch (e) {
          return null;
        }
      }
}