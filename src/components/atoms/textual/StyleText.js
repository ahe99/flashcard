import React from 'react';
import {Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const StyleText = ({
  fontSize,
  color,
  fontWeight,
  children,
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
      ]}>
      {children}
    </Text>
  );
};
