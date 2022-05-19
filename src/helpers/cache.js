import {Image} from 'react-native';
import {Asset} from 'expo-asset';

export const cacheImages = _images => {
  return _images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};
