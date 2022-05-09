import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {width, height} from '$helpers/dimensions';
import {Modal} from '$components/molecules';
import {CardForm} from './CardForm';
storiesOf('organisms', module).add('CardForm', () => {
  // const data = [{title: 'item1', id: 1}];
  return <MockDataProvider />;
});
const MockDataProvider = () => {

  const groupList = [
    {title: 'option_one'},
    {title: 'option_two'},
    {title: 'option_three'},
  ];

  const submit = async data => {
    console.log(data);
  };

  return (
    <View
      style={{
        width: width,
        height: height * 0.8,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <CardForm
        title="CardForm"
        submit={submit}
        action="Edit"
        groupList={groupList}
      />
    </View>
  );
};
