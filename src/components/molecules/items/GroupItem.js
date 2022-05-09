import React, {useState} from 'react';

import {DraggableItem, DropdownItem} from '$components/atoms';

export const GroupItem = ({
  group: {title, id, show},
  defaultOpen = true,
  children,
  editGroup,
  deleteGroup,
  dragDisabled = false,
  toggleDisabled = false,
  wrapperStyle = {},
  itemsStyle = {},
}) => {
  const [onShowCards, setOnShowCards] = useState(defaultOpen);
  const options = [
    {
      onPress: () => {
        editGroup(id);
      },
      disabled: false,
      iconPrefix: {
        name: 'pencil-square-o',
      },
    },
    {
      onPress: () => {
        deleteGroup(id);
      },
      disabled: false,
      iconPrefix: {
        name: 'trash-o',
      },
    },
  ];

  return (
    <>
      <DraggableItem disabled={dragDisabled} renderOptions={options}>
        <DropdownItem
          onPress={() => setOnShowCards(prev => !prev)}
          label={title}
          disabled={toggleDisabled}
          defaultOpen={onShowCards}
          wrapperStyle={wrapperStyle}
          itemsStyle={itemsStyle}
        />
      </DraggableItem>
      {onShowCards && children}
    </>
  );
};
