/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const Link = ({
  onPress,
  children,
  fontSize,
  color,
  fontWeight,
  textAlign,
  lineHeight,
  style,
}) => {
  const {
    colors,
    fonts: {sizes},
  } = useTheme();

  return (
    <Text
      style={[
        style,
        {
          fontSize: fontSize ?? sizes.normal,
          color: color ?? colors.text,
          fontWeight: fontWeight,
          textAlign: textAlign ?? 'center',
          lineHeight: lineHeight ?? 50,
        },
      ]}
      onPress={onPress}>
      {children}
    </Text>
  );
};
