import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {Column} from '$layouts/layout';
import {width} from '$helpers/dimensions';
import {MultiCheckbox} from './MultiCheckbox';

storiesOf('molecules', module).add('MultiCheckbox', () => {
  return <MockDataProvider />;
});
const MockDataProvider = () => {
  const [data, setData] = useState([]);

  const options = [
    {label: 'option_one', value: 'option_one'},
    {label: 'option_two', value: 'option_two'},
    {label: 'option_three', value: 'option_three'},
    {label: 'option_four', value: 'option_four'},
  ];

  return (
    <Column flex={1} v="center" h="center" style={{width: width * 0.8}}>
      <MultiCheckbox
        label="MultiCheckbox"
        data={data}
        onChange={setData}
        options={options}
      />
    </Column>
  );
};
