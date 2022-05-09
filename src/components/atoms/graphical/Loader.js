import React, {useEffect, useRef} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const Loader = ({size, color, wrapperStyle}) => {
  const {colors} = useTheme();
  return (
    <View style={wrapperStyle}>
      <ActivityIndicator
        size={size ?? 'large'}
        color={color ?? colors.loader}
      />
    </View>
  );
};
