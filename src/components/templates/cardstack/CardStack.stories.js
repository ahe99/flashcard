import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {width, height} from '$helpers/dimensions';
import {CardStack} from './CardStack';

storiesOf('templates', module).add('CardStack', () => <MockDataProvider />);
const MockDataProvider = () => {
  const data = [
    {
      title: 'Mock card one',
      id: 1,
      pages: [
        {title: 'page_one', id: 1},
        {title: 'page_two', id: 2},
      ],
      up: 10,
      down: 5,
    },
    {
      title: 'Mock card two',
      id: 2,
      pages: [
        {title: 'page_one', id: 1},
        {title: 'page_two', id: 2},
      ],
      up: 10,
      down: 5,
    },
    {
      title: 'Mock card three',
      id: 3,
      pages: [
        {title: 'page_one', id: 1},
        {title: 'page_two', id: 2},
      ],
      up: 10,
      down: 5,
    },
    {
      title: 'Mock card four',
      id: 4,
      pages: [
        {title: 'page_one', id: 1},
        {title: 'page_two', id: 2},
      ],
      up: 10,
      down: 5,
    },
    {
      title: 'Mock card five',
      id: 5,
      pages: [
        {title: 'page_one', id: 1},
        {title: 'page_two', id: 2},
      ],
      up: 10,
      down: 5,
    },
  ];
  return (
    <View
      style={{
        width: width * 0.8,
        height: height * 0.8,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <CardStack cardList={data} goBack={() => console.log('go back')} />
    </View>
  );
};
