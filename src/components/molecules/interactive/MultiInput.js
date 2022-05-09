import React from 'react';

import {Column, Row} from '$layouts/layout';

import {Input, StyleText, Button} from '$components/atoms';

export const MultiInput = ({
  label,
  data = [{title: '', id: Date.now()}],
  onChange,
  onChangeItem,
  onCreateItem,
  onDeleteItem,
  placeholder = '...',
  // placeholder = 'type something...',
}) => {
  return (
    <Column v="center" h="center" style={{width: '100%'}}>
      <StyleText>{`${label}:`}</StyleText>
      {data?.map(({id, title}, index) => (
        <Input
          key={index}
          placeholder={placeholder}
          value={title}
          wrapperStyle={{marginBottom: 5}}
          onChange={val => {
            if (onChange) {
              onChange(
                data.map(item => {
                  if (item.id === id) {
                    item.title = val;
                  }
                  return item;
                }),
              );
            }
            if (onChangeItem) {
              onChangeItem(
                data.map(item => {
                  if (item.id === id) {
                    item.title = val;
                  }
                  return item;
                }),
              );
            }
          }}
        />
      ))}
      <Row
        v="center"
        h="space-between"
        style={{marginBottom: 5, width: '100%'}}>
        <Button
          onPress={() => {
            if (onChange) {
              onChange(data.slice(0, -1));
            }
            if (onDeleteItem) {
              onDeleteItem(data.slice(0, -1));
            }
          }}
          wrapperStyle={{
            width: '48%',
          }}
          iconPrefix={{
            name: 'minus',
          }}
        />
        <Button
          onPress={() => {
            if (onChange) {
              onChange([...data, {id: Date.now(), title: ''}]);
            }
            if (onCreateItem) {
              onCreateItem([...data, {id: Date.now(), title: ''}]);
            }
          }}
          iconPrefix={{
            name: 'plus',
          }}
          wrapperStyle={{
            width: '48%',
          }}
        />
      </Row>
    </Column>
  );
};
