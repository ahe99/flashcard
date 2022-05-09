import React from 'react';

import {Column} from '$layouts/layout';

import {DateRecordItem, CardRecordItem} from '$components/molecules';

export const TestRecordList = ({testRecords = [], wrapperStyle = {}}) => {
  return (
    <Column
      h="center"
      v="center"
      style={[wrapperStyle, {width: wrapperStyle.width ?? '100%'}]}>
      {Object.keys(testRecords).map(date => (
        <DateRecordItem key={date} date={date}>
          {testRecords[date].map((record, index) => (
            <CardRecordItem key={index} record={record} />
          ))}
        </DateRecordItem>
      ))}
    </Column>
  );
};
