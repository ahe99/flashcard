import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {width, height} from '$helpers/dimensions';
import {CardPage} from './CardPage';

storiesOf('molecules', module).add('CardPage', () => <MockDataProvider />);
const MockDataProvider = () => {
  const data = {
    title: 'Mock card',
    pages: [
      {title: 'page_one', id: 1},
      {title: 'page_two', id: 2},
    ],
    up: 10,
    down: 5,
  };
  return (
    <Column
      style={{
        width: width * 0.8,
        height: height * 0.6,
      }}
      v="center">
      <CardPage backgroundColor="#ddd" card={data} />
    </Column>
  );
};
