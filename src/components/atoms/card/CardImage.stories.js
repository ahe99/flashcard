import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {CardImage} from './CardImage';

storiesOf('atoms', module).add('CardImage', () => (
  <Column flex={1} v="center">
    <CardImage source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
  </Column>
));
