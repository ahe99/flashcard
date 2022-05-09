import React, {useEffect, useState} from 'react';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {useToken} from './useToken';

// have no idea why can't use these:
// import {auth} from '$config/firebase';

export const useAuth = () => {
  const auth = getAuth();
  const {getToken, setToken, clearToken} = useToken();
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, user => {
      if (user) {
        //user is signed in
        console.log('in');
        setToken(user.uid);
        setUser(user);
      } else {
        //user is signed out
        console.log('out');
        setUser(undefined);
      }
    });
    return unsubscribeFromAuthStatuChanged;
  }, []);

  const register = async ({email, password}) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async ({email, password}) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      clearToken();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    user,
    login,
    logout,
    register,
  };
};
