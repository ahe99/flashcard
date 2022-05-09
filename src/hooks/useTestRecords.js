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
  serverTimestamp,
} from 'firebase/firestore';

import {getFormattedTimestamp} from '$utils/date';

import {useToken} from './useToken';

export function useTestRecords() {
  const {getToken} = useToken();
  const [testRecords, setTestRecords] = useState([]);

  const [currentRecord, setCurrentRecord] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const db = getFirestore();
  const testsCollection = collection(db, 'tests');

  const loadTestRecords = async () => {
    setIsLoading(true);
    const docRef = query(
      testsCollection,
      where('owner', '==', await getToken()),
    );

    const docSnap = await getDocs(docRef);
    let data = [];
    docSnap.forEach(doc => {
      data.push({
        ...doc.data(),
        created_at: getFormattedTimestamp(doc.data().created_at),
      });
    });

    const dateList = data.map(({created_at}) => created_at);
    const dateSet = [...new Set(dateList)];

    let formatedData = {};

    dateSet.forEach(date => {
      formatedData = {...formatedData, [date]: []};
    });

    data.forEach(({created_at, records}) => {
      formatedData[created_at] = [...formatedData[created_at], ...records];
    });

    // console.log(formatedData);

    setTestRecords(formatedData);
    setIsLoading(false);
  };

  const reloadTestRecords = async () => {
    const docRef = query(
      testsCollection,
      where('owner', '==', await getToken()),
    );

    const docSnap = await getDocs(docRef);
    let data = [];
    docSnap.forEach(doc => {
      data.push(doc.data());
    });
    setTestRecords(data);
  };

  const createTestRecord = async data => {
    if (await getToken()) {
      const newDocRef = doc(testsCollection);
      await setDoc(newDocRef, {
        ...data,
        id: newDocRef.id,
        owner: await getToken(),
        created_at: serverTimestamp(),
      });
    }
    reloadTestRecords();
  };

  const updateTestRecord = async (id, data) => {
    const docRef = doc(testsCollection, id);
    await updateDoc(docRef, {
      ...data,
    });

    reloadTestRecords();
  };

  const deleteTestRecord = async id => {
    const docRef = doc(testsCollection, id);
    await deleteDoc(docRef);

    reloadTestRecords();
  };

  useEffect(() => {
    loadTestRecords();
  }, []);

  return {
    testRecords,
    createTestRecord,
    updateTestRecord,
    deleteTestRecord,
    isLoading,
    isError,
  };
}
