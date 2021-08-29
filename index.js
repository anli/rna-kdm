/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import {App} from './src';

LogBox.ignoreLogs([
  // https://github.com/facebook/react-native/issues/32037
  "EventEmitter.removeListener('change', ...): Method has been deprecated.",
]);

AppRegistry.registerComponent(appName, () => App);
