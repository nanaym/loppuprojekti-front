import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class AppInfo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Infoa Lounas appista</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})