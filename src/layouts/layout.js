/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

const Row = ({v, h, children, style, flex}) => {
  return (
    <View
      style={[
        style,
        {
          flexDirection: 'row',
          alignItems: v,
          justifyContent: h,
          flex: flex,
        },
      ]}>
      {children}
    </View>
  );
};
const Column = ({v, h, children, style, flex}) => {
  return (
    <View
      style={[
        style,
        {
          flexDirection: 'column',
          alignItems: h,
          justifyContent: v,
          flex: flex,
        },
      ]}>
      {children}
    </View>
  );
};

export {Row, Column};
