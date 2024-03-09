// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getFirestore,
    query,
    updateDoc,
    collection,
    getDocs,
    getDoc,
    doc,
  } from 'firebase/firestore';

import { firebaseConfig } from "./firebase.config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export class FirebaseService {
    constructor() {}

    async getMorse() : Promise<{id:string, data:any}|null> {
        console.log('getMorse function invoked');
        const q = query(collection(db, "morse"));
        let querySnapshot = await getDocs(q);
        try {
            return querySnapshot.docs.map( x => { return {id:x.id,data:x.data()} })[0];
        } catch (e) {
          return null;
        }
    }

    updateMorse(id:string|undefined, value:any) {
      console.log('updateMorse function invoked');
      try {
        const docRef = doc(db, "morse", id==undefined?"_":id);
        updateDoc(docRef,{"value":value});
        console.log("updated");
      } catch (e) {
        console.log(e);
      }
  }
}