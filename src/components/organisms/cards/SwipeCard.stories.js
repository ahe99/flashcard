import React from 'react';
import {View} from 'react-native';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {SwipeCard} from './SwipeCard';

storiesOf('organisms', module).add('SwipeCard', () => <MockDataProvider />);
const MockDataProvider = () => {
  const data = {
    title: 'Mock card',
    img: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540ahe794613%252Fflashcard/ImagePicker/f80e52de-0f9f-45fa-84cc-0e64527cadea.jpg',
    pages: [
      {title: 'page_one', id: 1},
      {title: 'page_two', id: 2},
    ],
    up: 10,
    down: 5,
  };
  return (
    <Column flex={1} v="center">
      <SwipeCard.Ads card={data} isSwipeable={false} />
      <SwipeCard.Base
        card={data}
        isSwipeable={false}
        wrapperStyle={{position: 'absolute'}}
      />
    </Column>
  );
};
