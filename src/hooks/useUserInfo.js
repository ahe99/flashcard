import React, {useEffect, useState} from 'react';

import {
  getFirestore,
  addDoc,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';

import {useToken} from './useToken';

export const useUserInfo = () => {
  const {getToken} = useToken();
  const db = getFirestore();

  const [userName, setUserName] = useState('');
  const [userStackSettings, setUserStackSettings] = useState({});

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = async () => {
    const userDocRef = doc(db, 'users', await getToken());
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      setUserName(docSnap.data().name);
      setUserStackSettings(docSnap.data().stack_setting);
    }
  };

  const updateUserStackSettings = async data => {
    const userDocRef = doc(db, 'users', await getToken());
    await updateDoc(userDocRef, {
      stack_setting: data,
    });
    setUserStackSettings(data);
  };

  return {
    name: userName,
    stackSettings: userStackSettings,
    updateUserStackSettings,
  };
};
