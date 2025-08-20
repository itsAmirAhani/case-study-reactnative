import 'react-native-gesture-handler'; // keep if you use react-navigation/gestures
import {AppRegistry} from 'react-native';
import App from './App';               // or './src/App' if you ever move it
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);