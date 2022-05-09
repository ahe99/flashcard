import React, {useEffect, useState, useMemo} from 'react';
import {View, ScrollView} from 'react-native';

import {Row, Column} from '$layouts/layout';
import {useUserInfo} from '$hooks';

import {StyleText, Input, Button} from '$components/atoms';
import {Checkbox, MultiCheckbox} from '$components/molecules';

export const CardStackForm = ({
  title,
  submit,
  cancel = () => {},
  groupList = [],
  wrapperStyle = {},
}) => {
  const [data, setData] = useState({});

  const groupOptions = useMemo(
    () =>
      groupList.map(({title}) => ({
        label: title,
        value: title,
      })),
    [groupList],
  );

  const userInfo = useUserInfo();

  useEffect(() => {
    if (userInfo && Object.keys(data).length === 0) {
      setData(userInfo.stackSettings);
    }
  }, [userInfo]);

  const onChange = (key, val) => {
    setData(prev => ({...prev, [key]: val}));
  };

  const check = async () => {
    console.log('check');
    if (submit) {
      userInfo.updateUserStackSettings(data);
      submit(data);
    }
  };

  return (
    <View style={wrapperStyle}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
              disabled={true}
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
      </ScrollView>
    </View>
  );
};
