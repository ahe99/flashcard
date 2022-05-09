import React from 'react';
import {View} from 'react-native';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {CardPageIndicator} from './CardPageIndicator';

storiesOf('atoms', module).add('CardPageIndicator', () => (
  <Column flex={1} v="center">
    <CardPageIndicator currentIndex={0} length={5} />
    <CardPageIndicator currentIndex={1} length={5} />
    <CardPageIndicator currentIndex={2} length={5} />
    <CardPageIndicator currentIndex={3} length={5} />
    <CardPageIndicator currentIndex={4} length={5} />
  </Column>
));
