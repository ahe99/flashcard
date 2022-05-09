import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {height, width} from '$helpers/dimensions';

import {DateRecordItem, CardRecordItem} from './DateRecordItem';
import {StyleText} from '$components/atoms';

storiesOf('molecules', module).add('DateRecordItem', () => {
  return <MockDataProvider />;
});
const MockDataProvider = () => {
  const [data, setData] = useState([
    '2022/04/28',
    '2022/04/29',
    '2022/04/30',
    '2022/05/01',
  ]);
  return (
    <Column
      flex={1}
      v="center"
      h="center"
      style={{width: width * 0.8, height: height * 0.6}}>
      {data.map(item => (
        <DateRecordItem key={item} date={item}>
          <StyleText>text</StyleText>
        </DateRecordItem>
      ))}
    </Column>
  );
};
