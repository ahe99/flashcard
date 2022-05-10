import React from 'react';
import {View} from 'react-native';

import {useAuth} from '$hooks';
import images from '$images';

import {Button} from '$components/atoms';
import {ImageBackground} from '$components/templates';

export const SettingsScreen = ({navigation}) => {
  const {logout} = useAuth();

  const handleLogout = async () => {
    await logout();
    navigation.navigate('UserLoginScreen');
  };
  return (
    <ImageBackground source={images.background.settings}>
      <View style={{backgroundColor: '#fff9', padding: 20, borderRadius: 20}}>
        <Button label="logout" onPress={handleLogout} />
      </View>
    </ImageBackground>
  );
};
