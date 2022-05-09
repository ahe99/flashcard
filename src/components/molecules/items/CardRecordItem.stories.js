import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {height, width} from '$helpers/dimensions';

import {CardRecordItem} from './CardRecordItem';

storiesOf('molecules', module).add('CardRecordItem', () => {
  return <MockDataProvider />;
});
const MockDataProvider = () => {
  const [data, setData] = useState([
    {
      card_id: '001',
      card_title: 'card one',
      type: 'down',
    },
    {
      card_id: '002',
      card_title: 'card two',
      type: 'up',
    },
    {
      card_id: '003',
      card_title: 'card three',
      type: 'up',
    },
  ]);
  return (
    <Column
      flex={1}
      v="center"
      h="center"
      style={{width: width * 0.8, height: height * 0.6}}>
      {data.map((item, index) => (
        <CardRecordItem key={index} record={item} />
      ))}
    </Column>
  );
};
