// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import dotenv from 'dotenv';
dotenv.config();

import {
    getFirestore,
    query,
    collection,
    getDocs
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.fb_apiKey,
    authDomain: process.env.fb_authDomain,
    projectId: process.env.fb_projectId,
    storageBucket: process.env.fb_storageBucket,
    messagingSenderId: process.env.fb_messagingSenderId,
    appId: process.env.fb_appId
};

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