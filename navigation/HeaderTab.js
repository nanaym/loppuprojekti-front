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
                leftComponent={{ icon: 'menu', color: 'white' }}
                centerComponent={{ text: 'Lunchie', style: { color: 'white', fontSize: 22, fontWeight: 'bold', fontFamily: 'monospace' } }}                containerStyle={{
                    backgroundColor: '#660066',
                    justifyContent: 'space-around',
                }}
            />
        )
    }
}

