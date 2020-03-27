import  React from 'react';
import { View, Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ScreenOne from '../screens/ScreenOne'
import ScreenTwo from '../screens/ScreenTwo'
import ScreenThree from '../screens/ScreenThree'
import ScreenFour from '../screens/ScreenFour'

const BottomTabNavigator = createBottomTabNavigator({
Etusivu: ScreenOne,
Profiili: ScreenTwo,
Ravintolat: ScreenThree,
Lounaslista: ScreenFour,
})

export default BottomTabNavigator;