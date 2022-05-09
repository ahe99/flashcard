import React from 'react';
import {View} from 'react-native';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {Counter} from './Counter';

storiesOf('atoms', module).add('Counter', () => (
  <Column flex={1} v="center">
    <Counter wrapperStyle={{marginBottom: 20}} count={100} />
    <Counter
      wrapperStyle={{marginBottom: 20}}
      count={100}
      label="label"
      labelPosition="left"
    />
    <Counter
      wrapperStyle={{marginBottom: 20}}
      count={100}
      label="label"
      labelPosition="right"
    />
    <Counter
      wrapperStyle={{marginBottom: 20}}
      count={100}
      label="label"
      labelPosition="top"
    />
    <Counter
      wrapperStyle={{marginBottom: 20}}
      count={100}
      label="label"
      labelPosition="bottom"
    />
    <Counter
      wrapperStyle={{marginBottom: 20}}
      count={100}
      iconPrefix={{name: 'thumbs-o-up'}}
    />
    <Counter
      wrapperStyle={{marginBottom: 20}}
      count={100}
      iconSuffix={{name: 'thumbs-o-down'}}
    />
    <Counter wrapperStyle={{marginBottom: 20}} count={100} label="label" />
  </Column>
));
