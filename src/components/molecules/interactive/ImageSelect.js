import React from 'react';
import {Text, Image} from 'react-native';
import * as IamgePicker from 'expo-image-picker';
// import {Asset} from 'expo-asset';
import {useTheme} from '@react-navigation/native';

import {Row, Column} from '$layouts/layout';

import {Button} from '$components/atoms';

export const ImageSelect = ({
  label,
  data: {uri, width = 0, height = 0},
  wrapperStyle = {},
  onChange,
}) => {
  const {colors, bgColors} = useTheme();

  const selectImageFromDevice = async () => {
    const result = await IamgePicker.launchImageLibraryAsync({
      mediaTypes: IamgePicker.MediaTypeOptions.All,
      allowEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled && onChange) {
      onChange({...result});
    }
  };
  return (
    <Column v="center" h="center" style={{width: '100%', height: '100%'}}>
      {uri && (
        <Row
          h="center"
          style={{
            backgroundColor: bgColors.form,
            width: '100%',
            height: 100,
            marginBottom: 5,
            padding: 5,
            borderRadius: 20,
            borderColor: colors.border,
            borderWidth: 3,
          }}>
          <Image resizeMode="contain" style={{flex: 1}} source={{uri: uri}} />
          <Column v="center" style={{padding: 5}}>
            <Text numberOfLines={1}>{uri}</Text>
          </Column>
        </Row>
      )}
      <Button
        wrapperStyle={{width: '100%'}}
        label={label}
        onPress={() => selectImageFromDevice()}
      />
    </Column>
  );
};
