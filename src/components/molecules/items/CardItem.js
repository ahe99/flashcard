import React, {useState} from 'react';

import {StyleText, DraggableItem} from '$components/atoms';

export const CardItem = ({
  card: {title, id, show},
  wrapperStyle,
  itemsStyle,
  editCard,
  deleteCard,
  toggleVisibleCard,
}) => {
  const [isShow, setIsShow] = useState(show);
  const options = [
    // {
    //   onPress: () => {
    //     setIsShow(prev => !prev);
    //     toggleVisibleCard(id, show);
    //   },
    //   disabled: false,
    //   iconPrefix: {
    //     name: isShow ? 'eye' : 'eye-slash',
    //   },
    // },
    {
      onPress: () => {
        editCard(id);
      },
      disabled: false,
      iconPrefix: {
        name: 'pencil-square-o',
      },
    },
    {
      onPress: () => {
        deleteCard(id);
      },
      disabled: false,
      iconPrefix: {
        name: 'trash-o',
      },
    },
  ];

  return (
    <DraggableItem
      renderOptions={options}
      wrapperStyle={wrapperStyle}
      itemsStyle={itemsStyle}>
      <StyleText
        textAlign="left"
        style={{
          paddingHorizontal: 20,
        }}>
        {title}
      </StyleText>
    </DraggableItem>
  );
};
