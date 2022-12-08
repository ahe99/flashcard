import React from 'react';
import {View, ScrollView, Pressable} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Column} from '$layouts/layout';
import {width, height} from '$helpers/dimensions';

import {Button} from '$components/atoms';

const SIZE_WIDTH = width * 0.9;
const SIZE_HEIGHT = height * 0.6;

export const Modal = ({children, onClose}) => {
  const {
    colors,
    bgColors,
    fonts: {sizes},
  } = useTheme();
  return (
    <Pressable
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
      }}
      onPress={onClose}>
      <Pressable
        style={{
          width: SIZE_WIDTH,
          height: SIZE_HEIGHT,
          alignItems: 'center',
          borderWidth: 3,
          borderColor: colors.border,
          borderRadius: 20,
          paddingVertical: 20,
          backgroundColor: bgColors.modalOuter,
          shadowColor: '#000',
        }}
        onPress={e => {
          e.stopPropagation();
        }}>
        <Column
          v="center"
          h="center"
          style={{
            width: '90%',
            height: '100%',
            borderRadius: 20,
            backgroundColor: bgColors.modalInner,
          }}
          // onStartShouldSetResponder={() => true}
        >
          <ScrollView
            style={{
              width: '100%',
            }}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
            }}>
            <View onStartShouldSetResponder={() => true}>{children}</View>
          </ScrollView>
        </Column>
      </Pressable>
    </Pressable>
  );
};
