import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {Loader} from './Loader';

storiesOf('atoms', module).add('Loader', () => <Loader />);
