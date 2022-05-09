import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {storiesOf} from '@storybook/react-native';
import {Column} from '$layouts/layout';
import {width, height} from '$helpers/dimensions';
import {CardListScreen} from './CardListScreen';
storiesOf('screens', module).add('CardListScreen', () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={'#997b66'} />
      <MockDataProvider />
    </SafeAreaProvider>
  );
});
const MockDataProvider = () => {
  return <CardListScreen />;
};
