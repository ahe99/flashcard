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
const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.firebaseApiKey,
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
  measurementId: Constants.manifest?.extra?.measurementId,
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
