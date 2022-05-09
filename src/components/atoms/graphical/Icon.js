import React from 'react';
import IconBase from '@expo/vector-icons/FontAwesome';

import {useTheme} from '@react-navigation/native';

export const Icon = ({name, color, size, style, iconStyle}) => {
  const {colors} = useTheme();
  return (
    <IconBase
      name={name}
      size={size ?? 24}
      color={color ?? colors.Icon}
      style={style}
      iconStyle={iconStyle}
    />
  );
};
