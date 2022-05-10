import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Row} from '$layouts/layout';

import {Icon} from '../graphical/Icon';

export const Button = ({
  label,
  onPress,
  color,
  iconPrefix,
  textStyle = {},
  wrapperStyle = {},
  disabled = false,
}) => {
  const {colors, bgColors} = useTheme();

  return (
    <TouchableOpacity
      style={[
        wrapperStyle,
        {
          borderColor: wrapperStyle.borderColor ?? colors.border,
          borderWidth: wrapperStyle.borderWidth ?? 3,
          borderRadius: wrapperStyle.borderRadius ?? 10,
          backgroundColor: wrapperStyle.backgroundColor ?? bgColors.button,
          paddingVertical: wrapperStyle.paddingVertical ?? 10,
          paddingHorizontal: wrapperStyle.paddingHorizontal ?? 20,
          opacity: !disabled ? 1 : 0.6,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Row v="center" h="space-evenly">
        {iconPrefix && (
          <Icon
            name={iconPrefix.name}
            color={(iconPrefix.color || color) ?? colors.icon}
            size={iconPrefix.size}
            style={{paddingRight: label ? 10 : 0}}
          />
        )}
        {label && (
          <Text style={[textStyle, {color: color ?? colors.text}]}>
            {label}
          </Text>
        )}
      </Row>
    </TouchableOpacity>
  );
};
