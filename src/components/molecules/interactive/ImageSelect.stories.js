import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {width, height} from '$helpers/dimensions';
import {ImageSelect} from './ImageSelect';

storiesOf('molecules', module).add('ImageSelect', () => {
  return <MockDataProvider />;
});
const MockDataProvider = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Column
      v="center"
      h="center"
      style={{
        width: width * 0.8,
      }}>
      <ImageSelect label="ImageSelect" data={data} onChange={setData} />
    </Column>
  );
};
