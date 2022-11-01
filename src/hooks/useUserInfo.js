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

  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userStackSettings, setUserStackSettings] = useState({});

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = async () => {
    const userId = await getToken();
    const userDocRef = doc(db, 'users', userId);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      setUserId(userId);
      setUserName(docSnap.data().name);
      setUserStackSettings(docSnap.data().stack_setting);
    }
  };

  const updateStackSettings = async data => {
    const userDocRef = doc(db, 'users', await getToken());
    await updateDoc(userDocRef, {
      stack_setting: data,
    });
    setUserStackSettings(data);
  };

  return {
    id: userId,
    name: userName,
    stackSettings: userStackSettings,
    updateStackSettings,
  };
};
