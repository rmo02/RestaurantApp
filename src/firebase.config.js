import {getApp, getApps, initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB-LvcXYYN5Tl9mUpJschivUVeTR_Oqh90",
    authDomain: "restaurantapp-20248.firebaseapp.com",
    databaseURL: "https://restaurantapp-20248-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-20248",
    storageBucket: "restaurantapp-20248.appspot.com",
    messagingSenderId: "99670426128",
    appId: "1:99670426128:web:c5ba68a19cd60a05620095"
  };

  const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export { app, firestore, storage };