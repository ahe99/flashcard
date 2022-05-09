import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {MultiInput} from './MultiInput';
import {width} from '$helpers/dimensions';

storiesOf('molecules', module).add('MultiInput', () => {
  const data = [{title: 'item1', id: 1}];
  return <MockDataProvider />;
});
const MockDataProvider = () => {
  const [data, setData] = useState([{title: 'Title one', id: 123456}]);

  return (
    <View style={{width: width * 0.8}}>
      <MultiInput label="Multi Input" data={data} onChange={setData} />
    </View>
  );
};
