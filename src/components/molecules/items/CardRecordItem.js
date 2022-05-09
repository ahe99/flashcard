import React from 'react';
import {useTheme} from '@react-navigation/native';

import {NormalItem} from '$components/atoms';

export const CardRecordItem = ({
  record: {card_title: title, card_id: id, type},
}) => {
  const {bgColors} = useTheme();

  return (
    <NormalItem
      label={title}
      wrapperStyle={{
        backgroundColor: type === 'up' ? bgColors.itemUp : bgColors.itemDown,
      }}
    />
  );
};
