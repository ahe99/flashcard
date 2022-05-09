import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import * as FacebookAds from 'expo-ads-facebook';
import {useTheme} from '@react-navigation/native';

import {Row, Column} from '$layouts/layout';
const {AdIconView, AdMediaView, AdTriggerView} = FacebookAds;
const AdComponent = ({
  nativeAd = {},
  adsManager = {},
  style = {},
  width = 320,
  height = 180,
}) => {
  const {
    colors,
    fonts: {sizes},
  } = useTheme();

  return (
    <Column v="space-evenly" h="center" style={[style, {position: 'relative'}]}>
      <AdTriggerView>
        <Row
          v="center"
          h="space-evenly"
          style={{
            width: width,
            borderRadius: 20,
          }}>
          <AdIconView
            style={{
              width: 50,
              height: 50,
            }}
          />
          <Column v="space-between" h="center" style={{width: width - 60}}>
            <Text
              style={{
                color: colors.heading,
                fontWeight: 'bold',
                fontSize: sizes.heading,
              }}>
              {nativeAd.headline}
            </Text>
            <Text style={{color: colors.text}}>{nativeAd.bodyText}</Text>
          </Column>
        </Row>
      </AdTriggerView>
      <AdMediaView style={{width: width, height: height}} />

      <AdTriggerView>
        <Row
          v="center"
          h="center"
          style={{
            width: width,
            position: 'relative',
            borderRadius: 20,
          }}>
          <Text numberOfLines={3} style={{color: colors.text, lineHeight: 20}}>
            {nativeAd.linkDescription}
          </Text>
        </Row>
      </AdTriggerView>
      <Text
        style={{
          bottom: 0,
          right: 10,
          fontStyle: 'italic',
          fontSize: 12,
          marginTop: 20,
          position: 'absolute',
          textAlign: 'right',
          color: colors.text,
        }}>{`${nativeAd.adTranslation} by ${nativeAd.advertiserName}`}</Text>
    </Column>
  );
};
export const NativeAds = new FacebookAds.withNativeAd(AdComponent);
// export NativeAds =AdProvider
