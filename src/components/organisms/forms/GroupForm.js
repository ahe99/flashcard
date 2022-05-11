/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';

import {Row, Column} from '$layouts/layout';

import {StyleText, Input, Button, Loader} from '$components/atoms';

export const GroupForm = ({
  title,
  groupId,
  submit,
  cancel,
  groupList = [],
  wrapperStyle = {},
}) => {
  const [data, setData] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);

  useEffect(() => {
    if (groupId && groupList) {
      setData(groupList.find(group => group.id === groupId));
    }
  }, [groupId, groupList]);

  const onChange = (key, val) => {
    setData(prev => ({...prev, [key]: val}));
  };

  const check = async () => {
    console.log('check');
    setIsSubmiting(true);
    if (submit) {
      submit(data);
    }
  };

  return (
    <View style={wrapperStyle}>
      {isSubmiting && <Loader />}
      <Column
        flex={1}
        v="center"
        h="center"
        style={{
          width: '100%',
          height: '100%',
          padding: 20,
        }}>
        <StyleText>{title}</StyleText>
        <Input
          label="name"
          value={data['title']}
          onChange={val => onChange('title', val)}
        />
        <Row h="space-around" style={{paddingTop: 20, width: '100%'}}>
          <Button
            onPress={cancel}
            iconPrefix={{
              name: 'arrow-left',
            }}
          />
          <Button
            onPress={check}
            iconPrefix={{
              name: 'save',
            }}
          />
        </Row>
      </Column>
    </View>
  );
};
