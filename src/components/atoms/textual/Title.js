import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const Title = ({fontSize, color, fontWeight, style, children}) => {
  const {
    colors,
    fonts: {sizes},
  } = useTheme();

  return (
    <Text
      style={[
        style,
        {
          fontSize: fontSize ?? sizes.heading,
          color: color ?? colors.heading,
          fontWeight: fontWeight,
        },
      ]}>
      {children}
    </Text>
  );
};
