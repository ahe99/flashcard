import React from 'react';
import {TextInput, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Row, Column} from '$layouts/layout';

import {StyleText} from '../textual/StyleText';
import {Icon} from '../graphical/Icon';

export const Input = ({
  label,
  onChange,
  value,
  placeholder = '...',
  iconPrefix,
  wrapperStyle = {},
  textStyle = {},
  isPassword = false,
  multiline = true,
}) => {
  const {
    colors,
    bgColors,
    fonts: {sizes},
  } = useTheme();

  return (
    <Column v="center" h="center" style={{width: '100%'}}>
      {label && <StyleText>{label}:</StyleText>}
      <Row
        v="stretch"
        style={[
          wrapperStyle,
          {
            overflow: 'hidden',
            width: wrapperStyle.width ?? '100%',
            height: 60,
            borderColor: wrapperStyle.borderColor ?? colors.border,
            borderWidth: wrapperStyle.borderWidth ?? 3,
            borderRadius: wrapperStyle.borderRadius ?? 10,
            // paddingVertical: wrapperStyle.paddingVertical ?? 10,
            // paddingHorizontal: wrapperStyle.paddingHorizontal ?? 20,
            backgroundColor: wrapperStyle.backgroundColor ?? bgColors.input,
          },
        ]}>
        {iconPrefix && (
          <View
            style={{
              flex: 1,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: bgColors.inputIcon,
              overflow: 'visible',
            }}>
            <Icon
              name={iconPrefix.name}
              color={iconPrefix.color ?? colors.icon}
            />
          </View>
        )}
        <View style={{flex: 9, alignItems: 'center', justifyContent: 'center'}}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.placeholder}
            onChangeText={val => {
              if (onChange) {
                onChange(val);
              }
            }}
            value={value}
            style={[
              textStyle,
              {
                width: '100%',
                padding: 10,
                color: textStyle.color ?? colors.text,
                fontSize: textStyle.fontSize ?? sizes.normal,
                backgroundColor: textStyle.backgroundColor ?? bgColors.input,
              },
            ]}
            multiline={multiline}
            secureTextEntry={isPassword}
          />
        </View>
      </Row>
    </Column>
  );
};
