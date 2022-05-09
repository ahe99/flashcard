import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Row, Column} from '$layouts/layout';

import {Icon} from '../graphical/Icon';
import {StyleText} from '../textual/StyleText';

export const CardStatus = ({up, down, style = {}}) => {
  const {
    colors,
    bgColors,
    fonts: {sizes},
  } = useTheme();

  const total = up + down;
  const [displayDetail, setDisplayDetail] = useState(false);
  const downPercent = Math.round((down / total) * 100);
  const upPercent = Math.round((up / total) * 100);
  return (
    <Column
      style={[
        style,
        {width: style.width ?? '80%', padding: style.padding ?? 10},
      ]}>
      <TouchableOpacity
        style={{width: '100%'}}
        onPress={() => setDisplayDetail(prev => !prev)}>
        <Row
          v="center"
          h="center"
          style={{
            width: '100%',
            borderRadius: 20,
            borderColor: colors.border,
            borderWidth: 1,
            overflow: 'hidden',
          }}>
          <View
            style={{
              width: `${downPercent}%`,
              height: 10,
              backgroundColor: bgColors.statusDown,
            }}
          />
          <View
            style={{
              width: `${upPercent}%`,
              height: 10,
              backgroundColor: bgColors.statusUp,
            }}
          />
        </Row>
      </TouchableOpacity>
      {displayDetail && (
        <Row h="space-between" style={{width: '100%'}}>
          <Row h="center" v="center">
            <Icon
              name="thumbs-o-down"
              iconStyle={{fontSize: sizes.small}}
              color={colors.statusDown}
            />
            <StyleText
              fontSize={sizes.small}
              color={colors.text}
              lineHeight={25}>
              {down ?? 0}
            </StyleText>
          </Row>
          <Row h="center" v="center">
            <Icon
              name="thumbs-o-up"
              iconStyle={{fontSize: sizes.small}}
              color={colors.statusUp}
            />
            <StyleText
              fontSize={sizes.small}
              color={colors.text}
              lineHeight={25}>
              {up ?? 0}
            </StyleText>
          </Row>
        </Row>
      )}
    </Column>
  );
};
