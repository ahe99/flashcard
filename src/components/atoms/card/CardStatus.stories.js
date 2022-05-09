import React from 'react';
import {View} from 'react-native';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import {width} from '$helpers/dimensions';
import {Column} from '$layouts/layout';

import {CardStatus} from './CardStatus';

storiesOf('atoms', module).add('CardStatus', () => (
  <Column flex={1} v="center" h="center" style={{width: width * 0.6}}>
    <CardStatus up={2} down={5} />
  </Column>
));
