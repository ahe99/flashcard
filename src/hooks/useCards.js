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

export function useCards() {
  const {getToken} = useToken();
  const [cardList, setCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const db = getFirestore();
  const cardsCollection = collection(db, 'cards');

  const loadCards = async () => {
    setIsLoading(true);
    const docRef = query(
      cardsCollection,
      where('owner', '==', await getToken()),
    );

    const docSnap = await getDocs(docRef);
    let data = [];
    docSnap.forEach(doc => {
      data.push(doc.data());
    });
    setCardList(data);
    setIsLoading(false);
  };

  const reloadCards = async () => {
    const docRef = query(
      cardsCollection,
      where('owner', '==', await getToken()),
    );

    const docSnap = await getDocs(docRef);
    let data = [];
    docSnap.forEach(doc => {
      data.push(doc.data());
    });
    setCardList(data);
  };

  const createCard = async data => {
    if (await getToken()) {
      const newDocRef = doc(cardsCollection);
      await setDoc(newDocRef, {
        ...data,
        id: newDocRef.id,
        owner: await getToken(),
      });
    }
    reloadCards();
  };

  const updateCard = async (id, data) => {
    const docRef = doc(cardsCollection, id);
    await updateDoc(docRef, {
      ...data,
    });

    reloadCards();
  };

  const deleteCard = async id => {
    const docRef = doc(cardsCollection, id);
    await deleteDoc(docRef);

    reloadCards();
  };

  useEffect(() => {
    loadCards();
  }, []);

  return {
    cardList,
    createCard,
    updateCard,
    deleteCard,
    isLoading,
    isError,
  };
}
