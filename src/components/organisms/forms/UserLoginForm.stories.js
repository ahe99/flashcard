import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {UserLoginForm} from './UserLoginForm';

storiesOf('organisms', module).add('UserLoginForm', () => (
  <UserLoginForm
    title="Login"
    submit={data => console.log(data)}
    cancel={() => console.log('cancel')}
  />
));
