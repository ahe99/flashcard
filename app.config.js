import 'dotenv/config';

export default {
  expo: {
    name: 'flashcard',
    slug: 'flashcard',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#fff1e6',
    },
    updates: {
      fallbackToCacheTimeout: 10,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.river.flashcard',
    },
    android: {
      package: 'com.river.flashcard',
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#fff1e6',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: [
      ['expo-ads-facebook', {}],
      ['expo-image-picker', {}],
    ],
    facebookScheme: process.env.FACEBOOK_SCHEME,
    facebookAppId: process.env.FACEBOOK_APP_ID,
    facebookDisplayName: 'Flashcard',
    facebookAutoLogAppEventsEnabled: true,
    facebookAdvertiserIDCollectionEnabled: true,
    extra: {
      facebookNativeAdsIosID: process.env.FACEBOOK_NATIVE_ADS_ID_IOS,
      facebookNativeAdsAndroidID: process.env.FACEBOOK_NATIVE_ADS_ID_ANDROID,
      facebookRewardAdsIosID: process.env.FACEBOOK_REWARD_ADS_ID_IOS,
      facebookRewardAdsAndroidID: process.env.FACEBOOK_REWARD_ADS_ID_ANDROID,

      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
    },
  },
};
