// Import the functions you need from the SDKs you need
import {getApps, getApp, initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import {getFirestore, initializeFirestore} from 'firebase/firestore';

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
  apiKey: Constants.expoConfig.extra.firebaseApiKey,
  authDomain: Constants.expoConfig.extra.firebaseAuthDomain,
  projectId: Constants.expoConfig.extra.firebaseProjectId,
  storageBucket: Constants.expoConfig.extra.firebaseStorageBucket,
  messagingSenderId: Constants.expoConfig.extra.firebaseMessagingSenderId,
  appId: Constants.expoConfig.extra.firebaseAppId,
  measurementId: Constants.expoConfig.extra.measurementId,
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
  db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });
} else {
  app = getApp();
  auth = getAuth();
  db = getFirestore();
}
// const analytics = getAnalytics(app);
