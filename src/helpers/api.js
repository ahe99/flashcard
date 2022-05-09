// import AsyncStorage from '@react-native-async-storage/async-storage';
// import storage from '../../data.json';
// import settings from '../../settings.json';
// let settingsStorage = {...settings};
// let cardsStorage = [...storage.cards];
// let groupStorage = [...storage.groups];
// // const init = async () => {
// //   await AsyncStorage.setItem('cards', JSON.stringify(cardsStorage));
// //   await AsyncStorage.setItem('groups', JSON.stringify(groupStorage));
// // };
// // init();
// // const getData = async () => {
// //   try {
// //     await AsyncStorage.setItem('cards', JSON.stringify(cardsStorage));
// //     await AsyncStorage.setItem('groups', JSON.stringify(groupStorage));
// //     let value = await AsyncStorage.getItem('cards');

// //     if (value !== null) {
// //       value = JSON.parse(value);
// //     }
// //   } catch (e) {
// //     console.log(e);
// //   }
// // };
// // getData();
// //card
// const getCardList = async () => {
//   console.log('get card list');
//   let cardList = await AsyncStorage.getItem('cards');
//   cardList = cardList === null ? null : JSON.parse(cardList);
//   return [...cardList];
// };
// const getCardListByGroup = async group => {
//   console.log('get card list by group');
//   let cardList = await AsyncStorage.getItem('cards');
//   cardList = cardList === null ? null : JSON.parse(cardList);
//   cardList = cardList.filter(item => item.group === group);
//   return [...cardList];
// };
// const getRandomIndex = max => {
//   return Math.floor(Math.random() * max);
// };
// const getRandomIndexArray = (num, max) => {
//   const temp = [];
//   while (temp.length < num) {
//     const randomNum = getRandomIndex(max);
//     if (!temp.includes(randomNum)) {
//       temp.push(randomNum);
//     }
//   }
//   return temp;
// };
// const getRandomCardList = async (num = 5) => {
//   const stack = [];
//   let cardList = await getCardList();
//   while (stack.length !== num && cardList.length !== 0) {
//     const card = cardList.splice(getRandomIndex(cardList.length), 1);
//     stack.push(card[0]);
//   }
//   return stack;
// };
// const putCard = async data => {
//   const {
//     id = Date.now(),
//     title = '',
//     up = 0,
//     down = 0,
//     show = true,
//     group = '',
//   } = data;
//   if (data.title.trim().length !== 0) {
//     const cardList = await getCardList();
//     console.log('put card');
//     console.log(data);
//     cardList.push({
//       id: id,
//       title: title,
//       show: show,
//       up: up,
//       down: down,
//       group: group,
//     });
//     await AsyncStorage.setItem('cards', JSON.stringify(cardList));
//   }
// };
// const postCard = async data => {
//   const {id, title, show, up, down, group, page} = data;
//   console.log('post card: ' + id);

//   let cardList = await getCardList();
//   cardList = cardList.map(card => {
//     if (card.id === id) {
//       if (title !== undefined && title.trim().length !== 0) {
//         card.title = title;
//       }
//       if (group !== undefined) {
//         card.group = group;
//       }
//       if (page !== undefined) {
//         card.page = [...page];
//       }
//       if (show !== undefined) {
//         card.show = show;
//       }
//       if (up !== undefined) {
//         // console.log(card.title);
//         card.up += 1;
//       }
//       if (down !== undefined) {
//         // console.log(card.title);
//         card.down += 1;
//       }
//     }
//     return card;
//   });
//   await AsyncStorage.setItem('cards', JSON.stringify(cardList));
// };
// const deleteCard = async id => {
//   console.log('delete card: ' + id);
//   let cardList = await getCardList();
//   cardList = cardList.filter(card => {
//     return card.id !== id;
//   });
//   await AsyncStorage.setItem('cards', JSON.stringify(cardList));
// };

// //group
// const getGroupList = async () => {
//   console.log('get Group');

//   let groupList = await AsyncStorage.getItem('groups');
//   groupList = groupList === null ? null : JSON.parse(groupList);
//   return [...groupList];
// };

// const putGroup = async ({title, id = Date.now()}) => {
//   console.log('put Group');
//   console.log({
//     title: title,
//     id: id,
//   });
//   let groupList = await getGroupList();
//   groupList.push({
//     title: title,
//     id: id,
//   });
//   await AsyncStorage.setItem('groups', JSON.stringify(groupList));
// };

// const deleteGroup = async id => {
//   console.log('delete Group');
//   let groupList = await getGroupList();
//   groupList = groupList.filter(item => {
//     return item.id !== id;
//   });
//   await AsyncStorage.setItem('groups', JSON.stringify(groupList));
// };
// const postGroup = async ({id, msg}) => {
//   console.log('post Group');
//   let groupList = await getGroupList();
//   groupList = groupList.map(item => {
//     if (item.id === id) {
//       item.title = msg;
//     }
//     return item;
//   });
//   await AsyncStorage.setItem('groups', JSON.stringify(groupList));
// };
// //settings
// const getSettings = () => {
//   return settingsStorage;
// };
// const setSettings = data => {
//   console.log(data);
// };
// export {
//   getCardList,
//   getCardListByGroup,
//   getRandomCardList,
//   putCard,
//   postCard,
//   deleteCard,
//   getGroupList,
//   putGroup,
//   postGroup,
//   deleteGroup,
//   getRandomIndex,
//   getRandomIndexArray,
// };
