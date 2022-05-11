import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';

import {Row, Column} from '$layouts/layout';

import {StyleText, Input, Button, Loader} from '$components/atoms';

export const UserLoginForm = ({title, submit, cancel}) => {
  const [data, setData] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);

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
    <Column
      flex={1}
      v="center"
      h="center"
      style={{
        width: '100%',
        height: '100%',
        padding: 20,
      }}>
      {isSubmiting && <Loader />}
      <StyleText>{title}</StyleText>
      <Input
        label="email"
        value={data['email']}
        placeholder="kono@example.com"
        onChange={val => onChange('email', val)}
        multiline={false}
        iconPrefix={{name: 'envelope-o'}}
      />
      <Input
        label="password"
        value={data['password']}
        onChange={val => onChange('password', val)}
        multiline={false}
        isPassword={true}
        iconPrefix={{name: 'lock'}}
      />
      <Row h="space-around" style={{paddingTop: 20, width: '100%'}}>
        <Button
          onPress={cancel}
          iconPrefix={{
            name: 'pencil',
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
  );
};
