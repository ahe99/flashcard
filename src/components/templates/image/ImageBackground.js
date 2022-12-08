import {ImageBackground as ImageBackgroundBase} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {height, width} from '$helpers/dimensions';

export const ImageBackground = ({children, defaultColor, source}) => {
  const {bgColors} = useTheme();

  return (
    <ImageBackgroundBase
      source={source}
      style={{
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: defaultColor ?? bgColors.imgDefault,
      }}
      fadeDuration={0}>
      {children}
    </ImageBackgroundBase>
  );
};
