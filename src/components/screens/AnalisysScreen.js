import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {Column} from '$layouts/layout';
import {useTestRecords} from '$hooks';
import {height, width} from '$helpers/dimensions';
import images from '$images';

import {Loader} from '$components/atoms';
import {TestRecordList} from '$components/organisms';
import {ImageBackground} from '$components/templates';

export const AnalisysScreen = props => {
  const records = useTestRecords();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      records.reload();
    }
  }, [isFocused]);

  return (
    <ImageBackground source={images.background.anasisys}>
      <View
        style={{
          width: width * 0.9,
          height: height * 0.7,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff9',
          borderRadius: 20,
        }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}
          style={{width: '100%', height: '100%'}}>
          {records.isLoading ? (
            <Loader />
          ) : (
            <TestRecordList testRecords={records.data} />
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
