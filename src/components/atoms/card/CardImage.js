import React, {useState, useEffect} from 'react';
import {View, Image} from 'react-native';

export const CardImage = ({style, source}) => {
  return (
    <View style={style}>
      <Image resizeMode="contain" source={{...source}} />
    </View>
  );
};
