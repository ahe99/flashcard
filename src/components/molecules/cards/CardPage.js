import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {width} from '$helpers/dimensions';
import {Column} from '$layouts/layout';

import {
  CardContent,
  CardImage,
  CardPageIndicator,
  CardStatus,
} from '$components/atoms';

export const CardPage = ({
  wrapperStyle = {},
  backgroundColor,
  card: {title, id, img, pages, up, down},
}) => {
  const {bgColors} = useTheme();

  const [index, setIndex] = useState(0);
  const [data, setData] = useState([
    {title: title, id: id, img: img},
    ...pages,
  ]);
  const handleTurnPage = e => {
    if (e.nativeEvent.pageX > width / 2) {
      console.log('next page');
      setIndex(prev => (prev + 1 < data?.length ? prev + 1 : prev));
    } else {
      console.log('back page');
      setIndex(prev => (prev - 1 >= 0 ? prev - 1 : 0));
    }
  };
  return (
    <TouchableOpacity
      style={[
        wrapperStyle,
        {
          width: wrapperStyle.width ?? '100%',
          height: wrapperStyle.height ?? '100%',
          borderRadius: 20,
        },
      ]}
      onPress={handleTurnPage}
      activeOpacity={0.9}>
      <Column
        v="center"
        h="center"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 20,
          backgroundColor: backgroundColor ?? bgColors.card,
        }}>
        <CardPageIndicator currentIndex={index} length={data?.length} />
        <Column v="center" h="center" flex={1}>
          {data[index].img && <CardImage source={{uri: img}} />}
          {data[index].title && <CardContent content={data[index].title} />}
        </Column>
        <CardStatus up={up} down={down} />
      </Column>
    </TouchableOpacity>
  );
};
