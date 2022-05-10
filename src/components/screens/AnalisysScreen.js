import React from 'react';

import {Column} from '$layouts/layout';
import {useTestRecords} from '$hooks';
import images from '$images';

import {TestRecordList} from '$components/organisms';
import {ImageBackground} from '$components/templates';

export const AnalisysScreen = props => {
  const {testRecords} = useTestRecords();

  return (
    <ImageBackground source={images.background.anasisys}>
      <Column
        v="center"
        h="center"
        style={{
          width: '100%',
          backgroundColor: 'rgb(200,110,60)',
        }}>
        <TestRecordList testRecords={testRecords} />
      </Column>
    </ImageBackground>
  );
};
