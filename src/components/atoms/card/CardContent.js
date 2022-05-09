import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {StyleText} from '../textual/StyleText';

export const CardContent = ({style, content}) => {
  const {
    colors,
    fonts: {sizes},
  } = useTheme();

  return (
    <StyleText
      fontSize={sizes.cardContent}
      color={colors.cardContent}
      style={style}>
      {content}
    </StyleText>
  );
};
