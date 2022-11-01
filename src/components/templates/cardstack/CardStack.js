import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {Row} from '$layouts/layout';
import {width, height} from '$helpers/dimensions';
import {shuffle} from '$utils/random';
import {useCards} from '$hooks/useCards';

import {Button} from '$components/atoms';
import {SwipeCard} from '$components/organisms';

export const DIRECTION = {
  TOP: 0,
  RIGHT: 1,
  BOTTOM: 2,
  LEFT: 3,
};

export const CardStack = ({
  cardList = [],
  wrapperStyle = {},
  onStackEmpty: _onStackEmpty,
  onSwipe: _onSwipe,
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
    if (_onStackEmpty) {
      _onStackEmpty();
    }
  };
  const onSwipe = (card, direction) => {
    if (_onSwipe) {
      _onSwipe(card, direction);
    }

    if (direction === DIRECTION.RIGHT) {
      onSwipeLeft(card);
    } else if (direction === DIRECTION.LEFT) {
      onSwipeRight(card);
    } else {
      //...
    }

    const isStackEmpty = card.id === cardStack[cardStack.length - 1]?.id;
    if (isStackEmpty) {
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
          // onSwipe={() => onSwipe(card)}
          // onSwipeTop={() => onSwipeTop(card.id)}
          // onSwipeBottom={() => onSwipeBottom(card.id)}
          onSwipeLeft={() => onSwipe(card, DIRECTION.LEFT)}
          onSwipeRight={() => onSwipe(card, DIRECTION.RIGHT)}
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
