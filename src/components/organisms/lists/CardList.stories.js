import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {width, height} from '$helpers/dimensions';

import {CardList} from './CardList';

storiesOf('organisms', module).add('CardList', () => {
  return <MockDataProvider />;
});
const MockDataProvider = () => {
  const [groupList, setGroupList] = useState([
    {title: 'basic', id: 1},
    {title: 'advanced', id: 2},
  ]);
  const [cardList, setCardList] = useState([
    {
      id: 1,
      title: 'card1',
      page: [{title: 'page1', id: 1}],
      group: 'advanced',
      show: true,
      up: 4,
      down: 3,
    },
    {
      id: 2,
      title: 'card2',
      page: [
        {title: 'page1', id: 1},
        {title: 'page2', id: 2},
      ],
      group: 'basic',
      show: true,
      up: 1,
      down: 5,
    },
    {
      id: 3,
      title: 'card3',
      page: [
        {title: 'page1', id: 1},
        {title: 'page2', id: 2},
        {title: 'page3', id: 3},
      ],
      group: '',
      show: true,
      up: 2,
      down: 2,
    },
  ]);
  return (
    <Column
      h="center"
      v="center"
      style={{
        width: width,
        height: height * 0.6,
        backgroundColor: '#fff1e6',
      }}>
      <CardList cardList={cardList} groupList={groupList} />
    </Column>
  );
};
