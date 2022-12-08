import React, {useState, useRef} from 'react';
import {Animated, PanResponder, Pressable, View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Row} from '$layouts/layout';

import {Icon} from '../graphical/Icon';

export const DraggableItem = ({
  children,
  renderOptions = [],
  defaultOpen = false,
  onPress,
  wrapperStyle = {},
  itemsStyle = {},
  insideColor,
  disabled = false,
}) => {
  const {
    colors,
    bgColors,
    fonts: {sizes},
  } = useTheme();
  const [onOption, setOnOption] = useState(defaultOpen);

  const drag = useRef(new Animated.Value(0)).current;
  const bounceBackItem = async () => {
    Animated.spring(drag, {
      toValue: 0,
      bounciness: 10,
      useNativeDriver: true,
    }).start();
  };

  const panResponser = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => {
        return !disabled;
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
        if (!disabled) {
          drag.setValue(gesture.dx);
        }
      },
      onPanResponderRelease: (e, gesture) => {
        if (!disabled) {
          bounceBackItem();
          if (gesture.dx > 40) {
            setOnOption(() => false);
          } else if (gesture.dx < -40) {
            setOnOption(() => true);
          }
        }
      },
    }),
  ).current;
  const toggleOptions = () => {
    setOnOption(prev => !prev);
  };
  return (
    <Animated.View
      style={[
        wrapperStyle,
        {
          width: wrapperStyle.width ?? '100%',
          height: wrapperStyle.height ?? 60,
        },
      ]}
      {...panResponser.panHandlers}>
      <Pressable
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: insideColor ?? bgColors.itemInner,
        }}
        onPress={onPress}
        onLongPress={toggleOptions}>
        <Row v="center" h="center" style={{height: '100%'}}>
          <Animated.View
            style={[
              itemsStyle,
              {
                right: !disabled && onOption ? '45%' : 0,
                width: '100%',
                height: '100%',
                transform: [{translateX: drag}],
                position: 'absolute',
                zIndex: 1,
                backgroundColor: itemsStyle.backgroundColor ?? bgColors.item,
              },
            ]}>
            {children}
          </Animated.View>

          <View
            style={{
              width: '55%',
              height: '100%',
              backgroundColor: bgColors.item,
            }}
          />
          {renderOptions?.map(
            (
              {
                label,
                onPress,
                disabled,
                color = colors.text,
                backgroundColor = bgColors.itemInner,
                wrapperStyle,
                textStyle,
                iconPrefix,
              },
              index,
            ) => (
              <Pressable
                key={index}
                onPress={onPress}
                disabled={disabled}
                style={[
                  wrapperStyle,
                  {
                    width: `${45 / renderOptions.length}%`,
                    height: '100%',
                    backgroundColor: backgroundColor,
                    opacity: disabled ? 0.4 : 1,
                    overflow: 'hidden',
                    justifyContent: 'center',
                    borderLeftWidth: renderOptions.length !== index ? 0.5 : 0,
                    borderLeftColor: colors.border,
                  },
                ]}>
                <Row
                  v="center"
                  h="center"
                  flex={1}
                  style={{padding: 5, height: '100%'}}>
                  {iconPrefix && (
                    <Icon
                      name={iconPrefix.name}
                      type={iconPrefix.type}
                      color={iconPrefix.color ?? colors.icon}
                    />
                  )}
                  {label && (
                    <Text
                      style={[
                        textStyle,
                        {
                          height: '100%',
                          color: color,
                          fontSize: sizes.normal,
                          flex: 1,
                          textAlign: 'center',
                          textAlignVertical: 'center',
                        },
                      ]}>
                      {label}
                    </Text>
                  )}
                </Row>
              </Pressable>
            ),
          )}
        </Row>
      </Pressable>
    </Animated.View>
  );
};
