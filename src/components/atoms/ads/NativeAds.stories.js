import React, {useState} from 'react';
import {storiesOf} from '@storybook/react-native';
import * as FacebookAds from 'expo-ads-facebook';
import {getPlacementId} from '$utils/ads';
// import {getPlacementId} from '../../../utils/ads';

// import {getPlacementId} from '$utils/ads';
import {Column} from '$layouts/layout';
import {NativeAds} from './NativeAds';
import {height, width} from '$helpers/dimensions';
import {Loader} from '$components/atoms';
// const adsManager = new FacebookAds.NativeAdsManager(bannerId, 1);

storiesOf('atoms', module).add('NativeAds', () => {
  return <MockDataProvider />;
});
const MockDataProvider = () => {
  const bannerId = getPlacementId(true);

  const adsManager = new FacebookAds.NativeAdsManager(bannerId, 1);
  const [isAdLoading, setIsAdLoading] = useState(true);
  return (
    <Column h="center" v="center" style={{width: width, height: height * 0.6}}>
      {isAdLoading && <Loader />}
      <NativeAds
        adsManager={adsManager ?? {}}
        style={{width: width, height: height * 0.6}}
        onAdLoaded={() => setIsAdLoading(false)}
        onError={() => setIsAdLoading(false)}
        width={width}
        height={(width * 9) / 16}
      />
    </Column>
  );
};
