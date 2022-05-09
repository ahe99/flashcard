import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {width} from '$helpers/dimensions';
import {DraggableItem} from './DraggableItem';
import {StyleText} from '..';

storiesOf('atoms', module).add('DraggbleItem', () => {
  return <MockDataProvider />;
});
const MockDataProvider = () => {
  const firstOptions = [
    {
      onPress: () => console.log('First_opt'),
      disabled: false,
      iconPrefix: {
        name: 'pencil-square-o',
      },
    },
    {
      onPress: () => console.log('Second_opt'),
      disabled: false,
      iconPrefix: {
        name: 'trash-o',
      },
    },
  ];
  const secondOptions = [
    {
      label: 'opt1',
      onPress: () => console.log('First_opt'),
      disabled: false,
      iconPrefix: {
        name: 'pencil-square-o',
      },
    },
    {
      label: 'opt2',
      onPress: () => console.log('Second_opt'),
      disabled: true,
      iconPrefix: {
        name: 'trash-o',
      },
    },
  ];

  return (
    <Column flex={1} v="center" h="center" style={{width: width * 0.8}}>
      <DraggableItem
        renderOptions={firstOptions}
        wrapperStyle={{marginBottom: 10}}>
        <StyleText
          textAlign="left"
          style={{
            paddingHorizontal: 10,
          }}>
          This is a draggable item
        </StyleText>
      </DraggableItem>
      <DraggableItem renderOptions={secondOptions} defaultOpen={true}>
        <StyleText
          textAlign="left"
          style={{
            paddingHorizontal: 10,
          }}>
          This is a opened draggable item
        </StyleText>
      </DraggableItem>
    </Column>
  );
};
