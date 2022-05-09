import React from 'react';
import {View} from 'react-native';
import {height, width} from '../src/helpers/dimensions';

const CenterDecorator = ({children}) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {children}
    </View>
  );
};

export default Decorator = {
  Center: CenterDecorator,
};
