import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {height, width} from '$helpers/dimensions';

import {NormalItem} from './NormalItem';

storiesOf('atoms', module).add('NormalItem', () => {
  return <MockDataProvider />;
});
const MockDataProvider = () => {
  return (
    <Column
      flex={1}
      v="space-evenly"
      h="center"
      style={{width: width * 0.8, height: height * 0.6}}>
      <NormalItem
        label="This is normal item"
        onPress={() => console.log('press')}
      />
    </Column>
  );
};
