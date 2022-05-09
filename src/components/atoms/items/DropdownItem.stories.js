import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {height, width} from '$helpers/dimensions';
import {DropdownItem} from './DropdownItem';

storiesOf('atoms', module).add('DropdownItem', () => {
  return <MockDataProvider />;
});
const MockDataProvider = () => {
  return (
    <Column
      flex={1}
      v="space-evenly"
      h="center"
      style={{width: width * 0.8, height: height * 0.6}}>
      <DropdownItem label="This is dropdown item">
        <View style={{width: '100%', padding: 20, backgroundColor: '#fff1e6'}}>
          <Text>item1</Text>
        </View>
        <View style={{width: '100%', padding: 20, backgroundColor: '#fff1e6'}}>
          <Text>item2</Text>
        </View>
        <View style={{width: '100%', padding: 20, backgroundColor: '#fff1e6'}}>
          <Text>item3</Text>
        </View>
      </DropdownItem>
    </Column>
  );
};
