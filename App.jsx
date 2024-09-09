/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './src/screens/Home';
import Calls from './src/screens/Calls';
import Invoice from './src/screens/Invoice';
import Property from './src/screens/Property';
import Foods from './src/screens/Foods';
import ChangePassword from './src/screens/ChangePassword';
import VideoCall from './src/screens/VideoCall';

function App(){
  
  return (
    <VideoCall/>
  );
}



export default App;
