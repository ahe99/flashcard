import React from 'react';

import * as SecureStore from 'expo-secure-store';

export const useToken = () => {
  const setToken = async value => {
    await SecureStore.setItemAsync('token', value);
  };
  const clearToken = async () => {
    await SecureStore.setItemAsync('token', '');
  };
  const getToken = async () => {
    const data = await SecureStore.getItemAsync('token');
    return data;
  };
  return {getToken, setToken, clearToken};
};
