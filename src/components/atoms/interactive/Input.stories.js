import React from 'react';
import {View} from 'react-native';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {Input} from './Input';
import {width} from '$helpers/dimensions';

storiesOf('atoms', module).add('Input', () => (
  <Column flex={1} v="center" style={{width: width * 0.8}}>
    <Input
      placeholder="type something..."
      onChange={val => action('change_text')}
      wrapperStyle={{marginBottom: 10}}
    />
    <Input
      placeholder="type something..."
      onChange={val => action('change_text')}
      wrapperStyle={{marginBottom: 10}}
      iconPrefix={{name: 'search'}}
    />
  </Column>
));
