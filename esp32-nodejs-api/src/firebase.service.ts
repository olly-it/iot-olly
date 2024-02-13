// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getFirestore,
    query,
    addDoc,
    collection,
    getDocs,
    doc,
    deleteDoc,
    where,
  } from 'firebase/firestore';

import { firebaseConfig } from "./firebase.config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export class FirebaseService {
    constructor() {}

    async getMorse() : Promise<{id:string, data:any}|null> {
        console.log('getMorse function invoked');
        //const q = query(collection(db, "postbox"), where("name", "==", name), where("birthDate", "==", birthDate));
        const q = query(collection(db, "morse"));
        let querySnapshot = await getDocs(q);
        try {
            return querySnapshot.docs.map( x => { return {id:x.id,data:x.data()} })[0];
        } catch (e) {
          return null;
        }
      }
}