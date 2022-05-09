import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Svg, {G, Circle} from 'react-native-svg';

import {Counter} from '$components/atoms';

export const Progress = ({
  size = 100,
  percent = 100,
  showCounter = false,
  color,
  counterProps,
  children,
}) => {
  const {colors} = useTheme();

  const strokeWidth = size * 0.075;
  const circumference = (size - strokeWidth * 2) * Math.PI;
  const progressValue = circumference - (circumference * percent) / 100;

  const offset = useRef(new Animated.Value(0)).current;
  const [percentText, setPercentText] = useState(0);

  const animate = async () => {
    Animated.timing(offset, {
      toValue: progressValue,
      duration: 1000,
      delay: 100,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animate();
  }, []);

  useEffect(() => {
    offset.addListener(({value}) => {
      let formatedValue = Math.round(100 - (value / circumference) * 100);
      setPercentText(formatedValue);
    });
    return () => {
      offset.removeAllListeners();
    };
  }, [percent]);

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Svg
        width={size}
        height={size}
        style={{
          transform: [{rotate: '-90deg'}],
        }}>
        <G>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - strokeWidth}
            stroke={color ?? colors.progressGap}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <AnimatedCircle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - strokeWidth}
            stroke={color ?? colors.progress}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
            fill="none"
          />
        </G>
      </Svg>
      <View style={{position: 'absolute'}}>
        {children}
        {showCounter && <Counter {...counterProps} count={`${percentText}%`} />}
      </View>
    </View>
  );
};
