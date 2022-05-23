import {Image} from 'react-native';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';

export const cacheImages = _images => {
  return _images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

export const cacheFonts = _fonts => {
  return _fonts.map(font => {
    return Font.loadAsync(font);
  });
};
