import React, {useState} from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import {StyleText} from '$components/atoms';
import {Modal} from './Modal';

storiesOf('molecules', module).add('Modal', () => <MockDataProvider />);
const MockDataProvider = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <View style={{width: '100%', height: '100%'}}>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
            console.log('close');
          }}>
          <StyleText fontSize={25}>This is a modal</StyleText>
        </Modal>
      )}
    </View>
  );
};
