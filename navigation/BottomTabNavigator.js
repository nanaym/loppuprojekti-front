import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, tabBarOptions } from 'react-navigation-tabs';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Info from '../screens/Info';

const BottomTabNavigator = createBottomTabNavigator({
//     tabBarOptions: {
//         style: {
//             backgroundColor: '#660066'
//         }
//     }
// },
//     {
        Home: Home,
        Menu: Menu,
        Info: Info
    })

export default BottomTabNavigator;