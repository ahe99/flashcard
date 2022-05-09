import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Row} from '$layouts/layout';

import {Icon} from '../graphical/Icon';

export const Counter = ({
  count,
  label,
  labelPosition = 'left',
  iconPrefix,
  iconSuffix,
  countStyle = {},
  labelStyle = {},
  wrapperStyle = {},
  color,
}) => {
  const {
    colors,
    fonts: {sizes},
  } = useTheme();

  const [flexDirection, setFlexDirection] = useState('row');
  useEffect(() => {
    if (labelPosition === 'left') {
      setFlexDirection('row');
    } else if (labelPosition === 'right') {
      setFlexDirection('row-reverse');
    } else if (labelPosition === 'top') {
      setFlexDirection('column-reverse');
    } else if (labelPosition === 'bottom') {
      setFlexDirection('column');
    }
  }, [labelPosition]);

  return (
    <Row v="center" h="center" style={wrapperStyle} className={labelPosition}>
      {iconPrefix && (
        <Icon
          name={iconPrefix.name}
          color={iconPrefix.color ?? colors.icon}
          style={{paddingRight: count ? 5 : 0}}
        />
      )}

      <View
        style={{
          flexDirection: flexDirection ?? 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {label && (
          <Text style={[labelStyle, {color: color ?? colors.text}]}>
            {label}
          </Text>
        )}
        <Text
          className
          style={[
            countStyle,
            {
              fontSize: countStyle.fontSize ?? sizes.normal,
              color: color ?? colors.text,
            },
          ]}>
          {count}
        </Text>
      </View>

      {iconSuffix && (
        <Icon
          name={iconSuffix.name}
          color={iconSuffix.color ?? colors.icon}
          style={{paddingLeft: count ? 5 : 0}}
        />
      )}
    </Row>
  );
};
