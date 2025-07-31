/**
 * @format
 */

import { AppRegistry } from 'react-native';
 import App from './src/Pages/Router';
// import App from './src/Pages/Auth/Onboarding/Onboarding';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
