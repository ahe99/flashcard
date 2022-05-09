import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {CardContent} from './CardContent';

storiesOf('atoms', module).add('CardContent', () => (
  <Column flex={1} v="center">
    <CardContent content="card_one" />
    <CardContent content="card_two" />
    <CardContent content="card_three" />
  </Column>
));
