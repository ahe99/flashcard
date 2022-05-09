import React, {useEffect} from 'react';
import {View, ImageBackground} from 'react-native';

import {useAuth, useToken} from '$hooks';
import {height, width} from '$helpers/dimensions';
import images from '$images';

import {UserLoginForm} from '$components/organisms';

export const UserLoginScreen = ({navigation}) => {
  const {login} = useAuth();
  const {getToken} = useToken();

  const submit = async data => {
    await login(data);
    if (await getToken()) {
      navigation.navigate('HomeScreen');
    }
  };

  const gotoRegisterScreen = () => {
    navigation.navigate('UserRegisterScreen');
  };

  return (
    <ImageBackground
      style={{
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      source={images.background.login}>
      <View
        style={{
          width: width * 0.8,
          height: height * 0.6,
          backgroundColor: '#fff9',
          borderRadius: 20,
        }}>
        <UserLoginForm
          title="Login form"
          submit={submit}
          navigation={navigation}
          cancel={gotoRegisterScreen}
        />
      </View>
    </ImageBackground>
  );
};
