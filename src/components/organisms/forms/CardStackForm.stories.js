import React, {useEffect} from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {useGroups} from '$hooks/useGroups';
import {CardStackForm} from './CardStackForm';
storiesOf('organisms', module).add('CardStackForm', () => {
  return <MockDataProvider />;
});

const MockDataProvider = () => {
  const groups = useGroups();

  const submit = async data => {
    console.log(data);
  };

  return (
    <CardStackForm
      title="CardStack form"
      groupList={groups.data}
      submit={submit}
    />
  );
};
