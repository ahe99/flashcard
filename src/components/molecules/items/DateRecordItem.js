import React from 'react';

import {DropdownItem} from '$components/atoms';

export const DateRecordItem = ({
  date,
  children,
  defaultOpen = true,
  index,
  dragDisabled = false,
  toggleDisabled = false,
  wrapperStyle = {},
  itemsStyle = {},
}) => {
  return (
    <DropdownItem
      label={date}
      disabled={toggleDisabled}
      defaultOpen={defaultOpen}
      wrapperStyle={wrapperStyle}
      itemsStyle={itemsStyle}>
      {children}
    </DropdownItem>
  );
};
