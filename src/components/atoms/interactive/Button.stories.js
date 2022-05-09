import React from 'react';
import {View} from 'react-native';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import {Button} from './Button';
import {Column} from '$layouts/layout';

storiesOf('atoms', module).add('Button', () => (
  <Column flex={1} v="center">
    <Button
      label="Button"
      onPress={action('clicked-text')}
      wrapperStyle={{marginBottom: 10}}
    />
    <Button
      label="ButtonWithIcon"
      onPress={action('clicked-text')}
      iconPrefix={{
        name: 'plus',
      }}
      wrapperStyle={{marginBottom: 10}}
    />
    <Button
      label="ButtonWithIcon"
      onPress={action('clicked-text')}
      iconPrefix={{
        name: 'plus',
        color: '#000',
      }}
      color="#000"
      wrapperStyle={{marginBottom: 10}}
    />
  </Column>
));
