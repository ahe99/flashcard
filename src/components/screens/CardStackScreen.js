import React, {useMemo, useState} from 'react';
import {View} from 'react-native';

import {useCards, useGroups} from '$hooks';
import {shuffle} from '$utils/random';
import {height, width} from '$helpers/dimensions';
import images from '$images';

import {CardStackForm} from '$components/organisms';
import {CardStack, ImageBackground} from '$components/templates';

export const CardStackScreen = () => {
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedNum, setSelectedNum] = useState(5);
  const [onSelect, setOnSelect] = useState(true);

  const [testRound, setTestRound] = useState(1);

  const {groupList} = useGroups();
  const {cardList} = useCards();

  const filteredList = useMemo(() => {
    let cards = [...cardList];

    if (selectedGroups) {
      cards = cards.filter(({group}) => selectedGroups.includes(group));
    }

    cards = shuffle(cards);

    if (selectedNum) {
      if (selectedNum < cards.length) {
        cards = cards.slice(0, selectedNum);
      }
    }

    return cards;
  }, [cardList, selectedGroups, testRound]);

  const submit = async data => {
    console.log(data);
    setSelectedGroups(data.groups);
    setSelectedNum(Number(data.numbers));
    setOnSelect(false);
  };

  const cancel = async () => {};

  const onStackEmpty = () => {
    setTestRound(prev => prev + 1);
  };

  return (
    <ImageBackground source={images.background.cardStack}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {onSelect ? (
          <View
            style={{
              width: width * 0.8,
              height: height * 0.6,
              backgroundColor: '#fff9',
              borderRadius: 20,
            }}>
            <CardStackForm
              title="card stack form"
              groupList={groupList}
              submit={submit}
              cancel={cancel}
            />
          </View>
        ) : (
          <CardStack
            cardList={filteredList}
            goBack={() => setOnSelect(true)}
            selectedGroups={selectedGroups}
            selectedNum={selectedNum}
            onStackEmpty={onStackEmpty}
          />
        )}
      </View>
    </ImageBackground>
  );
};
