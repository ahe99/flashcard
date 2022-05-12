/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useMemo, useState} from 'react';
import {View, ScrollView} from 'react-native';

import {Row, Column} from '$layouts/layout';

import {StyleText, Input, Button, Loader} from '$components/atoms';
import {MultiInput, Checkbox} from '$components/molecules';

export const CardForm = ({
  title,
  submit,
  cardId,
  cancel,
  cardList = [],
  groupList = [],
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
    if (cardId && cardList) {
      setData(cardList.find(card => card.id === cardId));
    }
  }, [cardId, cardList]);

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
    <>
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
        <Checkbox
          label="group"
          data={data['group']}
          options={groupOptions}
          onChange={val => {
            onChange('group', val);
          }}
        />
        <MultiInput
          label="pages"
          data={data['pages']}
          onChange={val => onChange('pages', val)}
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
    </>
  );
};
