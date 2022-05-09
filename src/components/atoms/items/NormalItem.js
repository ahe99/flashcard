import React, {useState} from 'react';
import {Text, Pressable} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const NormalItem = ({
  label = '',
  labelStyle = {},
  onPress,
  disabled,
  wrapperStyle = {},
}) => {
  const {
    colors,
    bgColors,
    fonts: {sizes},
  } = useTheme();

  return (
    <Pressable
      style={[
        wrapperStyle,
        {
          width: wrapperStyle.width ?? '100%',
          backgroundColor: wrapperStyle.backgroundColor ?? bgColors.item,
        },
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text
        style={[
          labelStyle,
          {
            width: labelStyle.width ?? '100%',
            padding: labelStyle.padding ?? 20,
            fontSize: labelStyle.fontSize ?? sizes.normal,
            color: labelStyle.color ?? colors.text,
          },
        ]}>
        {label}
      </Text>
    </Pressable>
  );
};
