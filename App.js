import React from 'react';

import AppNavigator from './navigation/AppNavigator';
// import ExcistingDates from './components/ExcistingDates';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
    <AppNavigator />
    {/* <ExcistingDates /> */}
    </View>
  )
};