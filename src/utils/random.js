export const getRandomIndex = maxNum => {
  return Math.floor(Math.random() * maxNum);
};

export const getRandomIndexArray = (arrayLength, maxNum) => {
  let temp = [];
  if (maxNum < arrayLength) {
    arrayLength = maxNum;
  }
  while (temp.length < arrayLength) {
    const randomNum = getRandomIndex(maxNum);
    if (!temp.includes(randomNum)) {
      temp.push(randomNum);
    }
  }
  return temp;
};

export const shuffle = cards => {
  const randomArray = getRandomIndexArray(cards.length, cards.length);
  const shuffledCards = randomArray.map(num => cards[num]);
  return shuffledCards;
};