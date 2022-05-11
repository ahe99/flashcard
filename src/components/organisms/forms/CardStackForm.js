import React, {useEffect, useState, useMemo} from 'react';
import {View, ScrollView} from 'react-native';

import {Row, Column} from '$layouts/layout';

import {StyleText, Input, Button, Loader} from '$components/atoms';
import {Checkbox, MultiCheckbox} from '$components/molecules';

export const CardStackForm = ({
  title,
  submit,
  cancel = () => {},
  groupList = [],
  wrapperStyle = {},
  stackSettings = {},
}) => {
  const [data, setData] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);

  const groupOptions = useMemo(
    () =>
      groupList.map(({title}) => ({
        label: title,
        value: title,
      })),
    [groupList],
  );

  useEffect(() => {
    if (stackSettings && Object.keys(data).length === 0) {
      setData(stackSettings);
    }
  }, [stackSettings]);

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
        <MultiCheckbox
          label="groups"
          data={data['groups']}
          onChange={val => onChange('groups', val)}
          options={groupOptions}
        />
        <Checkbox
          label="num of cards"
          data={data['numbers']}
          options={[
            {label: 1, value: 1},
            {label: 5, value: 5},
            {label: 10, value: 10},
            {label: 15, value: 15},
            {label: 20, value: 20},
          ]}
          onChange={val => onChange('numbers', val)}
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
              name: 'check',
            }}
          />
        </Row>
      </Column>
    </View>
  );
};
