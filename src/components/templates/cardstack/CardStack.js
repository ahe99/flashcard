import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {Row} from '$layouts/layout';
import {width, height} from '$helpers/dimensions';
import {shuffle} from '$utils/random';
import {useCards} from '$hooks/useCards';

import {Button} from '$components/atoms';
import {SwipeCard} from '$components/organisms';

export const CardStack = ({
  cardList = [],
  wrapperStyle = {},
  onStackEmpty,
  goBack,
}) => {
  const [cardStack, setCardStack] = useState([]);
  const [reloadEnabled, setReloadEnabled] = useState(false);
  const [isLoadling, setIsLoadling] = useState(true);

  const {updateCard} = useCards();

  useEffect(() => {
    if (cardList) {
      setCardStack(shuffle(cardList));
      setIsLoadling(false);
    }
  }, []);

  const reloadStack = async () => {
    setCardStack(shuffle(cardList));
    setReloadEnabled(false);
  };
  const onSwipeEnd = async () => {
    setCardStack([]);
    setReloadEnabled(true);
    if (onStackEmpty) {
      onStackEmpty();
    }
  };
  const onSwipe = card => {
    if (card.id === cardStack[cardStack.length - 1]?.id) {
      onSwipeEnd();
    }
  };

  const onSwipeLeft = async card => {
    if (card) {
      updateCard(card.id, {down: card.down + 1});
    }
  };
  const onSwipeRight = async card => {
    if (card) {
      updateCard(card.id, {up: card.up + 1});
    }
  };

  return (
    <View
      style={[
        wrapperStyle,
        {
          width: width * 0.8,
          height: height * 0.6,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}>
      {cardStack.map((card, index) => (
        <SwipeCard.Base
          card={card}
          key={index}
          wrapperStyle={{
            position: 'absolute',
            zIndex: -index + 100,
          }}
          onSwipe={() => onSwipe(card)}
          // onSwipeTop={() => onSwipeTop(card.id)}
          // onSwipeBottom={() => onSwipeBottom(card.id)}
          onSwipeLeft={() => onSwipeLeft(card)}
          onSwipeRight={() => onSwipeRight(card)}
        />
      ))}
      {!isLoadling && (
        <Row
          style={{
            backgroundColor: '#fff9',
            position: 'absolute',
            zIndex: 0,
            padding: 40,
            borderRadius: 20,
          }}>
          <Button
            wrapperStyle={{
              width: 100,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 20,
            }}
            disabled={!Boolean(goBack)}
            onPress={goBack}
            iconPrefix={{name: 'arrow-left', size: 50}}
          />
          <Button
            wrapperStyle={{
              width: 100,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            disabled={!reloadEnabled}
            onPress={reloadStack}
            iconPrefix={{name: 'undo', size: 50}}
          />
        </Row>
      )}
    </View>
  );
};
