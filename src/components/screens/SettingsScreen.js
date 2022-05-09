import React from 'react';
import {View, ImageBackground} from 'react-native';

import {useAuth} from '$hooks';
import {height, width} from '$helpers/dimensions';
import images from '$images';

import {Button} from '$components/atoms';

export const SettingsScreen = ({navigation}) => {
  const {logout} = useAuth();

  const handleLogout = async () => {
    await logout();
    navigation.navigate('UserLoginScreen');
  };
  return (
    <ImageBackground
      style={{
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      source={images.background.settings}>
      <View style={{backgroundColor: '#fff9', padding: 20, borderRadius: 20}}>
        <Button label="logout" onPress={handleLogout} />
      </View>
    </ImageBackground>
  );
};
