// if you use expo remove this line
import {AppRegistry} from 'react-native';

import {getStorybookUI, configure, addDecorator} from '@storybook/react-native';
import {withKnobs} from '@storybook/addon-knobs';

import {loadStories} from './storyLoader';
import Decorator from './Decorator';
import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);
addDecorator(storyFn => <Decorator.Center>{storyFn()}</Decorator.Center>);
// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  host: '', // replace this ip address with your local ip address
  port: '7007',
  asyncStorage: null,

  // asyncStorage: require('@react-native-community/async-storage').default,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
