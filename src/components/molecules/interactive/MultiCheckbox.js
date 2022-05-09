import React from 'react';
import {useTheme} from '@react-navigation/native';

import {Column, Row} from '$layouts/layout';

import {StyleText, Button} from '$components/atoms';

export const MultiCheckbox = ({
  label,
  data = [],
  options = [{label: '...', value: ''}],
  onChange,
}) => {
  const {colors, bgColors} = useTheme();

  const onChangeValue = value => {
    const selected = data.includes(value);

    if (selected) {
      onChange(data.filter(item => item !== value));
    } else {
      onChange([...data, value]);
    }
  };

  const getCheckboxStyle = value => {
    const selected = data.includes(value);
    return {
      marginBottom: 10,
      marginRight: 10,
      backgroundColor: selected ? bgColors.checkboxSelected : bgColors.checkbox,
    };
  };
  const getCheckboxTextColor = value => {
    const selected = data.includes(value);
    return selected ? colors.checkboxSelected : colors.checkbox;
  };

  return (
    <Column style={{width: '100%'}}>
      {label && <StyleText>{label}</StyleText>}
      <Row v="center" h="center" style={{width: '100%', flexWrap: 'wrap'}}>
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
