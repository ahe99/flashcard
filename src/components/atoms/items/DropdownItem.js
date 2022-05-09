import React, {useState} from 'react';
import {Text, Pressable} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Column, Row} from '$layouts/layout';

import {Icon} from '../graphical/Icon';

export const DropdownItem = ({
  children,
  label,
  labelStyle = {},
  iconStyle = {},
  defaultOpen = false,
  onPress,
  disabled,
  wrapperStyle = {},
  itemsStyle = {},
}) => {
  const {
    colors,
    bgColors,
    fonts: {sizes},
  } = useTheme();

  const [isToggled, setIsToggled] = useState(defaultOpen);
  return (
    <Column
      style={[
        wrapperStyle,
        {
          width: wrapperStyle.width ?? '100%',
        },
      ]}
      v="center"
      h="center">
      <Pressable
        style={{
          width: '100%',
        }}
        disabled={disabled}
        onPress={() => {
          setIsToggled(prev => !prev);
          if (onPress) {
            onPress();
          }
        }}>
        <Row
          v="center"
          h="flex-start"
          style={[
            itemsStyle,
            {
              width: '100%',
              height: itemsStyle.height ?? 60,
              opacity: disabled ? 0.4 : 1,
              backgroundColor:
                itemsStyle.backgroundColor ?? bgColors.itemHeader,
            },
          ]}>
          <Icon
            name={isToggled ? 'angle-down' : 'angle-right'}
            color={iconStyle.color ?? colors.icon}
            style={{padding: 20}}
            iconStyle={[iconStyle, {fontSize: 20}]}
          />
          <Text
            style={[
              labelStyle,
              {
                fontSize: labelStyle.fontSize ?? sizes.normal,
                color: labelStyle.color ?? colors.text,
              },
            ]}>
            {label}
          </Text>
        </Row>
      </Pressable>
      {isToggled && children}
    </Column>
  );
};
