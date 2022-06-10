import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB66zzkXLM5dEzqE_CsaXBQtSP0trgCwWc',
  authDomain: 'restaurantapp-169fc.firebaseapp.com',
  databaseURL:
    'https://restaurantapp-169fc-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'restaurantapp-169fc',
  storageBucket: 'restaurantapp-169fc.appspot.com',
  messagingSenderId: '693511230181',
  appId: '1:693511230181:web:e27484223221aa8f013a0c',
  measurementId: 'G-J0T02ZLY5M',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
