import React from 'react';
import {View} from 'react-native';

import {useAuth, useToken} from '$hooks';
import {height, width} from '$helpers/dimensions';
import images from '$images';

import {UserLoginForm} from '$components/organisms';
import {ImageBackground} from '$components/templates';

export const UserLoginScreen = ({navigation}) => {
  const {login} = useAuth();
  const {getToken} = useToken();

  const submit = async data => {
    try {
      await login(data);
    } catch (e) {
      console.log(e);
    }
    if (await getToken()) {
      navigation.navigate('HomeScreen');
    }
  };

  const gotoRegisterScreen = () => {
    navigation.navigate('UserRegisterScreen');
  };

  return (
    <ImageBackground source={images.background.login}>
      <View
        style={{
          width: width * 0.8,
          height: height * 0.6,
          backgroundColor: '#fff9',
          borderRadius: 20,
        }}>
        <UserLoginForm
          title="Flashcard"
          submit={submit}
          navigation={navigation}
          cancel={gotoRegisterScreen}
        />
      </View>
    </ImageBackground>
  );
};
