import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {height, width} from '$helpers/dimensions';

import {TestRecordList} from './TestRecordList';
import {StyleText} from '$components/atoms';

storiesOf('organisms', module).add('TestRecordList', () => {
  return <MockDataProvider />;
});
const MockDataProvider = () => {
  const [data, setData] = useState({
    '2022/01/01': [
      {
        card_id: '001',
        card_title: 'card one',
        type: 'up',
      },
      {
        card_id: '002',
        card_title: 'card two',
        type: 'up',
      },
      {
        card_id: '003',
        card_title: 'card three',
        type: 'down',
      },
    ],
    '2022/01/02': [
      {
        card_id: '011',
        card_title: 'card one',
        type: 'up',
      },
      {
        card_id: '012',
        card_title: 'card two',
        type: 'up',
      },
      {
        card_id: '013',
        card_title: 'card three',
        type: 'down',
      },
    ],
    '2022/01/03': [
      {
        card_id: '021',
        card_title: 'card one',
        type: 'down',
      },
    ],
  });
  return (
    <Column
      flex={1}
      v="center"
      h="center"
      style={{width: width, height: height * 0.6}}>
      <TestRecordList testRecords={data} />
    </Column>
  );
};
