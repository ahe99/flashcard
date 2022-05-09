import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {UserRegisterForm} from './UserRegisterForm';

storiesOf('organisms', module).add('UserRegisterForm', () => (
  <UserRegisterForm
    title="Register"
    submit={data => console.log(data)}
    cancel={() => console.log('cancel')}
  />
));
