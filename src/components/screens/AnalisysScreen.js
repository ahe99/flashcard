import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';


import {Column} from '$layouts/layout';
import {useTestRecords} from '$hooks';
import {height, width} from '$helpers/dimensions';

import images from '$images';

import {TestRecordList} from '$components/organisms';

export const AnalisysScreen = props => {
  const {testRecords} = useTestRecords();

  return (
    <ImageBackground
      style={{
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      source={images.background.anasisys}>
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
