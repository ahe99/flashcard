import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {Link} from './Link';
import {Column} from '$layouts/layout';

storiesOf('atoms', module).add('Link', () => (
  <Column flex={1} v="center">
    <Link style={{marginBottom: 10}} onPress={() => console.log('toggle sth')}>
      This is Link
    </Link>
  </Column>
));
