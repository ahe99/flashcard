import React, {useState, useEffect} from 'react';

import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';

//to fix: need to import this and put it here which is wierd
import {db} from '$config/firebase';

import {useToken} from './useToken';

export function useGroups() {
  const {getToken} = useToken();

  const [groupList, setGroupList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const db = getFirestore();
  const groupsCollection = collection(db, 'groups');

  const loadGroups = async () => {
    setIsLoading(true);
    const docRef = query(
      groupsCollection,
      where('owner', '==', await getToken()),
    );

    const docSnap = await getDocs(docRef);
    let data = [];
    docSnap.forEach(doc => {
      data.push(doc.data());
    });
    setGroupList(data);
    setIsLoading(false);
  };

  const reloadGroups = async () => {
    const docRef = query(
      groupsCollection,
      where('owner', '==', await getToken()),
    );

    const docSnap = await getDocs(docRef);
    let data = [];
    docSnap.forEach(doc => {
      data.push(doc.data());
    });
    setGroupList(data);
  };

  const createGroup = async data => {
    const newDocRef = doc(groupsCollection);
    await setDoc(newDocRef, {...data, id: newDocRef.id});
    reloadGroups();
  };

  const updateGroup = async (id, data) => {
    const docRef = doc(groupsCollection, id);
    await updateDoc(docRef, {
      ...data,
    });
    reloadGroups();
  };

  const deleteGroup = async id => {
    const docRef = doc(groupsCollection, id);
    await deleteDoc(docRef);
    reloadGroups();
  };

  useEffect(() => {
    loadGroups();
  }, []);

  return {
    groupList,
    createGroup,
    updateGroup,
    deleteGroup,
    isLoading,
    isError,
  };
}
