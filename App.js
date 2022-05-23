import React, {Fragment, useState, useRef, useEffect, useCallback} from 'react';
import {StatusBar, Platform} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import images from '$images';
import {cacheImages, cacheFonts} from '$helpers/cache';
import {DefaultTheme} from '$styles/themes';
import {useAuth} from '$hooks';

import {Icon} from '$components/atoms';
import {
  AnalisysScreen,
  CardListScreen,
  CardStackScreen,
  SettingsScreen,
  UserRegisterScreen,
  UserLoginScreen,
} from '$components/screens';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="CardStackScreen"
      activeColor="#b58463"
      inactiveColor="#997b66"
      barStyle={{backgroundColor: '#e6ccb299'}}
      screenOptions={{
        lazy: false,
      }}>
      <Tab.Screen
        name="CardStackScreen"
        component={CardStackScreen}
        options={{
          tabBarLabel: 'CardStack',
          tabBarIcon: ({color}) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="CardListScreen"
        component={CardListScreen}
        options={{
          tabBarLabel: 'CardList',
          tabBarIcon: ({color}) => <Icon name="edit" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="AnalisysScreen"
        component={AnalisysScreen}
        options={{
          tabBarLabel: 'Analisys',
          tabBarIcon: ({color}) => (
            <Icon name="bar-chart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => <Icon name="cog" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

const AppContent = () => {
  const {user} = useAuth();
  return (
    <Stack.Navigator
      initialRouteName={!Boolean(user) ? 'UserLoginScreen' : 'HomeScreen'}>
      {!Boolean(user) ? (
        <>
          <Stack.Screen
            name="UserLoginScreen"
            component={UserLoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserRegisterScreen"
            component={UserRegisterScreen}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const _loadAssetsAsync = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();

      let preloadImages = [];
      for (let image of images.background) {
        preloadImages.push(image);
      }
      const imageAssets = cacheImages([...preloadImages]);
      const fontAssets = cacheFonts([FontAwesome.font]);

      await Promise.all([...imageAssets, ...fontAssets]);

      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (e) {
      console.log(e);
    } finally {
      setIsReady(true);
    }
  };

  useEffect(() => {
    _loadAssetsAsync();
  }, []);

  useEffect(() => {
    if (isReady) {
      const showAppContent = async () => {
        await SplashScreen.hideAsync();
      };
      showAppContent();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DefaultTheme}>
        <StatusBar backgroundColor={'#997b66'} />
        <AppContent />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
// export {default} from './storybook';

export default App;
