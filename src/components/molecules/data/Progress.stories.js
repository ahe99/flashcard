import React from 'react';
import {Text, View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {Progress} from './Progress';
import {Column} from '$layouts/layout';
import {StyleText} from '$components/atoms';
import {height, width} from '../../../helpers/dimensions';

storiesOf('molecules', module).add('Progress', () => {
  return (
    <Column v="center" r="center">
      <Progress percent={60} showCounter={true} />
      <Progress size="150" percent={70} showCounter={false}>
        <StyleText color="#b58463">test 1</StyleText>
      </Progress>
      <Progress
        size="200"
        percent={80}
        showCounter={true}
        counterProps={{label: 'test 2', labelPosition: 'bottom'}}
      />
    </Column>
  );
});
