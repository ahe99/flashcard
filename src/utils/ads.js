// import * as FacebookAds from 'expo-ads-facebook';
import {Platform} from 'react-native';
import Constants from 'expo-constants';

const ID = {
  android: {
    native: Constants.manifest?.extra?.facebookNativeAdsAndroidID,
    reward: Constants.manifest?.extra?.facebookRewardAdsAndroidID,
  },
  ios: {
    native: Constants.manifest?.extra?.facebookNativeAdsIosID,
    reward: Constants.manifest?.extra?.facebookRewardAdsIosID,
  },
};

const getPlacementId = bannerAd => {
  let placementId = Platform.OS === 'ios' ? ID.ios.native : ID.android.native;

  if (__DEV__) {
    return `IMG_16_9_APP_INSTALL#${placementId}`;
  }
  return placementId;
};

const getPlacementId_reward = bannerAd => {
  let placementId = Platform.OS === 'ios' ? ID.ios.reward : ID.android.reward;

  if (__DEV__) {
    return `IMG_16_9_APP_INSTALL#${placementId}`;
  }
  return placementId;
};
export {getPlacementId, getPlacementId_reward};
