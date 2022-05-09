import React, {useState} from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {CardItem} from './CardItem';

storiesOf('molecules', module).add('CardItem', () => <MockDataProvider />);

const MockDataProvider = () => {
  const [data, setData] = useState([
    {title: 'card one', id: 1, show: true},
    {title: 'card two', id: 2, show: false},
    {title: 'card three', id: 3, show: false},
  ]);

  return (
    <Column flex={1} v="center">
      {data?.map((card, index) => (
        <CardItem
          key={card.id}
          card={card}
          wrapperStyle={{
            borderBottomWidth: data.length - 1 !== index ? 1 : 0,
            borderBottomColor: '#997b66',
          }}
          // itemsStyle={{backgroundColor: '#000'}}
        />
      ))}
    </Column>
  );
};
