import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header } from 'react-native-elements';
export default class HeaderTab extends Component {
    render() {
        return (
            <Header
                placement="center"
                centerComponent={{ text: 'Lunchie', style: { color: 'white', fontSize: 30, fontWeight: 'bold', fontFamily: 'monospace' } }}
                containerStyle={{
                    backgroundColor: '#660066',
                    justifyContent: 'space-around',
                }}
            />
        )
    }
}
