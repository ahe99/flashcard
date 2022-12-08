import React from 'react';
import {View} from 'react-native';

import {useAuth} from '$hooks';
import images from '$images';
import {height, width} from '$helpers/dimensions';

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
      <View
        style={{
          width: width * 0.9,
          height: height * 0.7,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff9',
          borderRadius: 20,
          padding: 20,
        }}>
        <Button
          wrapperStyle={{width: 100, height: 100}}
          onPress={handleLogout}
          iconPrefix={{name: 'sign-out', size: 40}}
        />
      </View>
    </ImageBackground>
  );
};
