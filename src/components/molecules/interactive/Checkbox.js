import React from 'react';
import {useTheme} from '@react-navigation/native';

import {Column, Row} from '$layouts/layout';

import {StyleText, Button} from '$components/atoms';

export const Checkbox = ({
  label,
  data,
  options = [{label: '...', value: ''}],
  onChange,
}) => {
  const {colors, bgColors} = useTheme();

  const onChangeValue = value => {
    if (value === data) {
      onChange('');
    } else {
      onChange(value);
    }
  };

  const getCheckboxStyle = value => {
    const selected = data === value;
    return {
      marginBottom: 10,
      marginRight: 10,
      backgroundColor: selected ? bgColors.checkboxSelected : bgColors.checkbox,
    };
  };
  const getCheckboxTextColor = value => {
    const selected = data === value;
    return selected ? colors.checkboxSelected : colors.checkbox;
  };

  return (
    <Column style={{width: '100%'}}>
      {label && <StyleText>{label}</StyleText>}
      <Row h="space-evenly" style={{width: '100%', flexWrap: 'wrap'}}>
        {options.map((item, index) => (
          <Button
            key={index}
            label={item.label}
            wrapperStyle={getCheckboxStyle(item.value)}
            color={getCheckboxTextColor(item.value)}
            onPress={() => {
              onChangeValue(item.value);
            }}
          />
        ))}
      </Row>
    </Column>
  );
};
