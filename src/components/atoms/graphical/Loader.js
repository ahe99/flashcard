import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Text, View, Animated} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {StyleText} from '../textual/StyleText';

const LOADING_TEXT = '#LOADING';

export const Loader = ({size, color, wrapperStyle}) => {
  const {colors, bgColors} = useTheme();
  const line = useRef(new Animated.Value(0)).current;
  const [isShuffled, setIsShuffled] = useState(false);
  const [numOfDots, setNumOfDots] = useState(0);
  const rotateR = line.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '40deg'],
    extrapolate: 'clamp',
  });
  const rotateL = line.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-40deg'],
    extrapolate: 'clamp',
  });
  const translateR = line.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50],
    extrapolate: 'clamp',
  });
  const translateL = line.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });
  const bgColorR = line.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255, 255, 187)', 'rgb(187, 255, 187)'],
    extrapolate: 'clamp',
  });
  const bgColorL = line.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(255, 255, 187)', 'rgb(255, 187, 187)'],
    extrapolate: 'clamp',
  });
  const shuffledAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(line, {
          toValue: 1,
          duration: 250,
          useNativeDriver: false,
        }),
        Animated.timing(line, {
          toValue: 0,
          duration: 250,
          useNativeDriver: false,
        }),
      ]),
      {iterations: 1},
    ).start(({finished}) => {
      setNumOfDots(prev => (prev % LOADING_TEXT.length) + 1);
      setIsShuffled(prev => !prev);
      if (finished) {
        shuffledAnimation();
      }
    });
  };

  useEffect(() => {
    shuffledAnimation();
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 20,
        backgroundColor: bgColors.mask,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
      }}>
      <Animated.View
        style={{
          width: 40,
          height: 60,
          backgroundColor: isShuffled ? bgColorR : bgColorL,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          transform: [{rotate: rotateR}, {translateX: translateR}],
          position: 'absolute',
          zIndex: isShuffled ? 100 : 102,
        }}>
        <View
          style={{
            width: 30,
            height: 50,
            backgroundColor: '#fff',
            borderRadius: 5,
          }}
        />
      </Animated.View>

      <Animated.View
        style={{
          width: 40,
          height: 60,
          backgroundColor: isShuffled ? bgColorL : bgColorR,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          transform: [{rotate: rotateL}, {translateX: translateL}],
          position: 'absolute',
          zIndex: 101,
        }}>
        <View
          style={{
            width: 30,
            height: 50,
            backgroundColor: '#fff',
            borderRadius: 5,
          }}
        />
      </Animated.View>
      <StyleText fontSize={20}>
        {LOADING_TEXT.substring(0, numOfDots)}
      </StyleText>
    </View>
  );
};
