import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header } from 'react-native-elements';
// import { createIconSetFromFontello } from 'react-native-vector-icons';
// import fontelloConfig from './config.json';


// const Icon = createIconSetFromFontello(fontelloConfig);




export default class HeaderTab extends Component {
    render() {
        return (
            <Header
                placement="left"
                centerComponent={{ text: 'LunchApp', style: { color: 'darkgrey' } }}
                rightComponent={{ icon: 'icon-app_logo_1-1', color: 'darkgrey' }}
                containerStyle={{
                    backgroundColor: '#660066',
                    justifyContent: 'space-around',
                  }}
            />
        )
    }
}