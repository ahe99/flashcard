import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';

import {useCards, useGroups, useUserInfo} from '$hooks';
import {shuffle} from '$utils/random';
import {height, width} from '$helpers/dimensions';
import images from '$images';

import {Button} from '$components/atoms';
import {Modal} from '$components/molecules';
import {CardStackForm} from '$components/organisms';
import {CardStack, ImageBackground} from '$components/templates';

export const CardStackScreen = () => {
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedNum, setSelectedNum] = useState(5);
  const [onSetting, setOnSetting] = useState(false);
  const [onStart, setOnStart] = useState(false);
  const [testRound, setTestRound] = useState(1);

  const {stackSettings, updateUserStackSettings} = useUserInfo();
  const {groupList} = useGroups();
  const {cardList} = useCards();

  useEffect(() => {
    if (stackSettings) {
      setSelectedNum(() => stackSettings.numbers ?? 5);
      setSelectedGroups(() => stackSettings.groups ?? []);
    }
  }, [stackSettings]);

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
    await updateUserStackSettings(data);

    setSelectedGroups(data.groups);
    setSelectedNum(Number(data.numbers));
    setOnSetting(false);
  };

  const cancel = async () => {
    setOnSetting(false);
  };

  const startStack = async () => {
    setOnStart(true);
  };

  const settingStack = async () => {
    setOnSetting(true);
  };

  const onStackEmpty = () => {
    setTestRound(prev => prev + 1);
  };

  const goBackFromStack = async () => {
    setOnStart(false);
  };

  return (
    <ImageBackground source={images.background.cardStack}>
      {onStart ? (
        <CardStack
          cardList={filteredList}
          goBack={goBackFromStack}
          selectedGroups={selectedGroups}
          selectedNum={selectedNum}
          onStackEmpty={onStackEmpty}
        />
      ) : (
        <View
          style={{
            width: width * 0.9,
            height: height * 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff9',
            borderRadius: 20,
          }}>
          <Button
            wrapperStyle={{width: 100, height: 100}}
            onPress={startStack}
            iconPrefix={{name: 'play', size: 40}}
            disabled={!filteredList?.length}
          />
          <Button
            wrapperStyle={{
              width: 100,
              height: 100,
              top: 0,
              right: 0,
              position: 'absolute',
              zIndex: 5,
              borderWidth: 0,
              backgroundColor: 'transparent',
            }}
            onPress={settingStack}
            iconPrefix={{name: 'cog', size: 30}}
          />
        </View>
      )}
      {onSetting && (
        <Modal onClose={cancel}>
          <CardStackForm
            title="card stack form"
            groupList={groupList}
            submit={submit}
            cancel={cancel}
            stackSettings={stackSettings}
          />
        </Modal>
      )}
    </ImageBackground>
  );
};
