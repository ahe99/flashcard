import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {StyleText} from './StyleText';
import {Column} from '$layouts/layout';

storiesOf('atoms', module).add('StyleText', () => (
  <Column flex={1} v="center">
    <StyleText style={{marginBottom: 10}}>This is style text</StyleText>
    <StyleText style={{marginBottom: 10}} color="#b58463">
      This is style text
    </StyleText>
    <StyleText style={{marginBottom: 10}} color="#e6ccb2">
      This is style text
    </StyleText>
  </Column>
));
