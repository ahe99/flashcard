// Import the functions you need from the SDKs you need
import {getApps, getApp, initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// solving: https://github.com/firebase/firebase-js-sdk/issues/1847
import {
  getReactNativePersistence,
  initializeAuth,
} from 'firebase/auth/react-native';

import {AsyncStorage} from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import Constants from 'expo-constants';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// for sdk 46 the path should be replaced with Constants.expoConfig
const firebaseConfig = {
  apiKey: Constants.manifest2?.extra?.expoClient.extra.firebaseApiKey,
  authDomain: Constants.manifest2?.extra?.expoClient.extra.firebaseAuthDomain,
  projectId: Constants.manifest2?.extra?.expoClient.extra.firebaseProjectId,
  storageBucket:
    Constants.manifest2?.extra?.expoClient.extra.firebaseStorageBucket,
  messagingSenderId:
    Constants.manifest2?.extra?.expoClient.extra.firebaseMessagingSenderId,
  appId: Constants.manifest2?.extra?.expoClient.extra.firebaseAppId,
  measurementId: Constants.manifest2?.extra?.expoClient.extra.measurementId,
};
let app;
let auth;
let db;
if (getApps().length < 1) {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  // auth = getAuth(app);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
  db = getFirestore(app);
} else {
  app = getApp();
  auth = getAuth();
  db = getFirestore();
}
// const analytics = getAnalytics(app);
export {auth, db};
