import React from 'react';
import {View, ScrollView} from 'react-native';

import {Column} from '$layouts/layout';
import {useTestRecords} from '$hooks';
import {height, width} from '$helpers/dimensions';
import images from '$images';

import {TestRecordList} from '$components/organisms';
import {ImageBackground} from '$components/templates';

export const AnalisysScreen = props => {
  const {testRecords} = useTestRecords();

  return (
    <ImageBackground source={images.background.anasisys}>
      <View
        style={{
          width: width * 0.8,
          height: height * 0.7,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff9',
          borderRadius: 20,
          padding: 20,
        }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}
          style={{width: '100%', height: '100%'}}>
          <TestRecordList testRecords={testRecords} />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
