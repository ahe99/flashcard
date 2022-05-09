import React, {Fragment, useState, useRef, useEffect} from 'react';
import {StatusBar, Platform, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

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
      barStyle={{backgroundColor: '#e6ccb299'}}>
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

const App = () => {
  const {user} = useAuth();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DefaultTheme}>
        <StatusBar backgroundColor={'#997b66'} />
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
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
// export {default} from './storybook';

export default App;
