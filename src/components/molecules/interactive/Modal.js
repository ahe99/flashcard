import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Column} from '$layouts/layout';
import {width, height} from '$helpers/dimensions';

import {Button} from '$components/atoms';

const SIZE_WIDTH = width * 0.9;

export const Modal = ({children, onClose}) => {
  const {
    colors,
    bgColors,
    fonts: {sizes},
  } = useTheme();
  return (
    <View
      style={{
        width: width,
        height: height,
        top: 0,
        left: 0,
        backgroundColor: bgColors.modalMask,
        position: 'absolute',
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Column
        h="center"
        style={{
          width: SIZE_WIDTH,
          borderWidth: 3,
          borderColor: colors.border,
          borderRadius: 20,
          paddingVertical: 20,
          backgroundColor: bgColors.modalOuter,
        }}>
        <Column
          v="center"
          h="center"
          style={{
            width: '90%',
            borderRadius: 20,
            backgroundColor: bgColors.modalInner,
          }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'flex-end',
            }}>
            <Button
              iconPrefix={{name: 'close'}}
              onPress={onClose}
              wrapperStyle={{
                top: 0,
                right: 0,
                position: 'absolute',
                zIndex: 5,
                borderWidth: 0,
                backgroundColor: 'transparent',
              }}
            />
          </View>
          <View>{children}</View>
        </Column>
      </Column>
    </View>
  );
};
