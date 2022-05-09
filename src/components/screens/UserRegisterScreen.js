import React from 'react';
import {View, ImageBackground} from 'react-native';

import {useAuth} from '$hooks';
import {height, width} from '$helpers/dimensions';
import images from '$images';

import {UserRegisterForm} from '$components/organisms';

export const UserRegisterScreen = ({navigation}) => {
  const {register} = useAuth();

  const gotoRegisterScreen = () => {
    navigation.navigate('UserLoginScreen');
  };

  const submit = async data => {
    register(data);
  };

  return (
    <ImageBackground
      style={{
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      source={images.background.register}>
      <View
        style={{
          width: width * 0.8,
          height: height * 0.6,
          backgroundColor: '#fff9',
          borderRadius: 20,
        }}>
        <UserRegisterForm
          title="Register form"
          submit={submit}
          cancel={gotoRegisterScreen}
        />
      </View>
    </ImageBackground>
  );
};
