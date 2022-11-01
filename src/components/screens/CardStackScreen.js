import React, {useEffect, useMemo, useState, useRef} from 'react';
import {View} from 'react-native';
import moment from 'moment';

import {useCards, useGroups, useUserInfo, useTestRecords} from '$hooks';
import {shuffle} from '$utils/random';
import {height, width} from '$helpers/dimensions';
import images from '$images';

import {Button} from '$components/atoms';
import {Modal} from '$components/molecules';
import {CardStackForm} from '$components/organisms';
import {CardStack, DIRECTION, ImageBackground} from '$components/templates';

const SCREEN_ACTION = {
  DEFALUT: 0,
  SETTING: 1,
  STACK: 2,
};

export const CardStackScreen = () => {
  const [selected, setSelected] = useState({
    groups: [],
    numbers: 5,
  });
  const [currentAction, setCurrentAction] = useState(SCREEN_ACTION.DEFALUT);
  const [testRound, setTestRound] = useState(1);
  const swipedCards = useRef([]);

  const user = useUserInfo();
  const {createTestRecord} = useTestRecords();
  const {groupList} = useGroups();
  const {cardList} = useCards();

  useEffect(() => {
    if (user.stackSettings) {
      setSelected({
        numbers: user.stackSettings.numbers ?? 5,
        group: user.stackSettings.groups ?? [],
      });
    }
  }, [user.stackSettings]);

  const filteredCardList = useMemo(() => {
    let cards = [...cardList];

    if (selected.groups) {
      cards = cards.filter(({group}) => selected.groups.includes(group));
    }

    cards = shuffle(cards);

    if (selected.numbers) {
      if (selected.numbers < cards.length) {
        cards = cards.slice(0, selected.numbers);
      }
    }

    return cards;
  }, [cardList, selected.groups, selected.numbers, testRound]);

  const submit = async data => {
    await user.updateUserStackSettings(data);

    setSelected({
      numbers: Number(data.numbers),
      group: data.groups ?? [],
    });
    setCurrentAction(SCREEN_ACTION.DEFALUT);
  };

  const cancel = async () => {
    setCurrentAction(SCREEN_ACTION.DEFALUT);
  };

  const startStack = async () => {
    setCurrentAction(SCREEN_ACTION.STACK);
  };

  const settingStack = async () => {
    setCurrentAction(SCREEN_ACTION.SETTING);
  };

  const handleSwipe = (card, direction) => {
    if (direction === DIRECTION.RIGHT) {
      swipedCards.current = [
        ...swipedCards.current,
        {card_id: card.id, card_title: card.title, type: 'up'},
      ];
    } else if (direction === DIRECTION.LEFT) {
      swipedCards.current = [
        ...swipedCards.current,
        {card_id: card.id, card_title: card.title, type: 'down'},
      ];
    } else {
      //...
    }
  };

  const handleSwipeEnd = async () => {
    await createTestRecord({records: swipedCards.current});

    swipedCards.current = [];
    setTestRound(prev => prev + 1);
  };

  const goBackFromStack = async () => {
    setCurrentAction(SCREEN_ACTION.DEFALUT);
  };

  return (
    <ImageBackground source={images.background.cardStack}>
      {currentAction === SCREEN_ACTION.STACK ? (
        <CardStack
          cardList={filteredCardList}
          goBack={goBackFromStack}
          selectedGroups={selected.groups}
          selectedNum={selected.numbers}
          onSwipe={handleSwipe}
          onStackEmpty={handleSwipeEnd}
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
            disabled={!filteredCardList?.length}
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
            showShadow={false}
            onPress={settingStack}
            iconPrefix={{name: 'cog', size: 30}}
          />
        </View>
      )}
      {currentAction === SCREEN_ACTION.SETTING && (
        <Modal onClose={cancel}>
          <CardStackForm
            title="card stack form"
            groupList={groupList}
            submit={submit}
            cancel={cancel}
            stackSettings={user.stackSettings}
          />
        </Modal>
      )}
    </ImageBackground>
  );
};
