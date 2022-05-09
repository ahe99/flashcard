import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {Column} from '$layouts/layout';
import {width, height} from '$helpers/dimensions';
import {GroupForm} from './GroupForm';
storiesOf('organisms', module).add('GroupForm', () => {
  return <MockDataProvider />;
});
const MockDataProvider = () => {
  return (
    <View
      style={{
        width: width,
        height: height * 0.8,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <GroupForm title="GroupForm" submit={data => console.log(data)} />
    </View>
  );
};
