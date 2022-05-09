import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Row} from '$layouts/layout';

export const CardPageIndicator = ({currentIndex, length}) => {
  const {colors} = useTheme();

  const [list, setList] = useState([]);
  const itemWidth = length < 5 ? '15%' : 100 / length - 5 + '%';

  useEffect(() => {
    setList([...Array(length).keys()]);
  }, [currentIndex, length]);

  return (
    <Row h="center" style={{padding: 10, overflow: 'hidden'}}>
      {list.map(i => (
        <View
          style={{
            width: itemWidth,
            height: i === currentIndex ? 5 : 4,
            borderRadius: 2,
            marginHorizontal: 2,
            backgroundColor:
              i === currentIndex ? colors.indicatorActive : colors.indicator,
          }}
          key={i}
        />
      ))}
    </Row>
  );
};
