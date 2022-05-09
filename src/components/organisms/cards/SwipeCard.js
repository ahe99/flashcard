import React, {useRef, useState} from 'react';
import {Animated, PanResponder} from 'react-native';
import * as FacebookAds from 'expo-ads-facebook';
import {useTheme} from '@react-navigation/native';

import {getPlacementId} from '$utils/ads';
import {width, height} from '$helpers/dimensions';
import {Column} from '$layouts/layout';

import {NativeAds} from '$components/atoms';
import {CardPage} from '$components/molecules';
import {Loader} from '../../atoms';

const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};

const SIZE_WIDTH = width * 0.8;
const SIZE_HEIGHT = (SIZE_WIDTH / 3) * 4;

const Swiper = ({
  children,
  isSwipeable = true,
  wrapperStyle,
  onSwipe,
  onSwipeTop,
  onSwipeBottom,
  onSwipeLeft,
  onSwipeRight,
  outerColor,
}) => {
  const {bgColors} = useTheme();

  const drag = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const rotate = drag.x.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: ['-40deg', '0deg', '40deg'],
    extrapolate: 'clamp',
  });
  const opacity = drag.x.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: [0.5, 1, 0.5],
    extrapolate: 'clamp',
  });
  const scale = drag.x.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: [1, 0.9, 1],
    extrapolate: 'clamp',
  });
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => {
        return isSwipeable;
      },
      onMoveShouldSetPanResponder: (e, gesture) => {
        const {dx, dy} = gesture;
        if (dx > 2 || dx < -2 || dy > 2 || dy < -2) {
          return true;
        } else {
          return false;
        }
      },
      onPanResponderGrant: (e, gesture) => {},
      onPanResponderMove: (e, gesture) => {
        drag.x.setValue(gesture.dx);
        drag.y.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        if (!isSwipeable) {
          bounceBackCard();
          return;
        }
        if (gesture.dx >= 90 && gesture.vx > 0) {
          //throw and yep the card
          console.log('yep!');
          const velocity = clamp(gesture.vx, 3, 5);
          if (onSwipeRight) {
            onSwipeRight();
          }
          swipeOffCard(gesture, velocity);
        } else if (gesture.dx <= -90 && gesture.vx < 0) {
          //throw and nope the card
          console.log('nope!');
          const velocity = clamp(gesture.vx * -1, 3, 5) * -1;
          if (onSwipeLeft) {
            onSwipeLeft();
          }
          swipeOffCard(gesture, velocity);
        } else if (Math.abs(gesture.dx) !== 0) {
          //take back the card
          bounceBackCard();
        }
      },
    }),
  ).current;
  const swipeOffCard = (gesture, velocity) => {
    if (onSwipe) {
      onSwipe();
    }
    Animated.decay(drag, {
      velocity: {x: velocity, y: gesture.vy},
      deceleration: 0.997,
      useNativeDriver: true,
    }).start(() => {
      //switch animation object
      ////////////////////
      drag.x.setValue(-width);
      drag.y.setValue(-height);
      ///////////////////
    });
  };
  const bounceBackCard = async () => {
    Animated.spring(drag, {
      toValue: {x: 0, y: 0},
      bounciness: 10,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        wrapperStyle,
        {
          width: SIZE_WIDTH,
          height: SIZE_HEIGHT,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: outerColor ?? bgColors.cardOuter,
          opacity: opacity,
          transform: [
            {translateX: drag.x},
            {translateY: drag.y},
            {
              rotate: rotate,
            },
            {scale: 1},
          ],
        },
      ]}
      {...panResponder.panHandlers}>
      {children}
    </Animated.View>
  );
};

const SwipeCardBase = ({
  card,
  isSwipeable = true,
  onSwipe,
  onSwipeTop,
  onSwipeBottom,
  onSwipeLeft,
  onSwipeRight,
  wrapperStyle,
  outerColor,
  innerColor,
}) => {
  return (
    <Swiper
      wrapperStyle={wrapperStyle}
      isSwipeable={isSwipeable}
      onSwipe={onSwipe}
      onSwipeTop={onSwipeTop}
      onSwipeBottom={onSwipeBottom}
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      outerColor={outerColor}>
      <CardPage
        wrapperStyle={{
          width: SIZE_WIDTH - 50,
          height: SIZE_HEIGHT - 50,
        }}
        card={card}
        backgroundColor={innerColor}
      />
    </Swiper>
  );
};
const SwipeCardWithAds = ({
  isSwipeable = true,
  onSwipe,
  onSwipeTop,
  onSwipeBottom,
  onSwipeLeft,
  onSwipeRight,
  wrapperStyle,
  outerColor,
  innerColor,
}) => {
  const [isAdLoading, setIsAdLoading] = useState(true);
  const bannerId = getPlacementId(true);
  const adsManager = new FacebookAds.NativeAdsManager(bannerId, 1);
  return (
    <Swiper
      wrapperStyle={wrapperStyle}
      isSwipeable={isSwipeable}
      onSwipe={onSwipe}
      onSwipeTop={onSwipeTop}
      onSwipeBottom={onSwipeBottom}
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      outerColor={outerColor}>
      <Column
        v="center"
        h="center"
        style={{
          width: SIZE_WIDTH - 50,
          height: SIZE_HEIGHT - 50,
          padding: 10,
          borderRadius: 20,
          backgroundColor: '#fff',
          overflow: 'hidden',
        }}>
        <Column v="center" h="center" flex={1}>
          {isAdLoading && <Loader />}
          <NativeAds
            style={{
              width: width * 0.8 - 50,
              height: height * 0.6 - 50,
              paddingVertical: 10,
              overflow: 'hidden',
            }}
            width={width * 0.8 - 50}
            height={((width * 0.8 - 50) * 9) / 16}
            adsManager={adsManager ?? {}}
            onAdLoaded={() => setIsAdLoading(false)}
            onError={() => setIsAdLoading(false)}
          />
        </Column>
      </Column>
    </Swiper>
  );
};

export const SwipeCard = {
  Base: SwipeCardBase,
  Ads: SwipeCardWithAds,
};
