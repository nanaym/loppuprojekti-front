import React, { Component } from 'react'
import { Text, View, StyleSheet, Linking } from 'react-native'

import { ActivityIndicator } from 'react-native';

export default class AppInfo extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>About this app</Text>


                <Text style={styles.text}>
                    {"\n"}
                    {"\n"}
                    The final project of Academy's Spring 2020 JavaScript class.
                    {"\n"}
                    {"\n"}
                    Team:
                    {"\n"}
                    Hanna Valli
                    {"\n"}
                    Oskari Auvinen
                    {"\n"}
                    Nana Martin
                    </Text>

                {/* <Image source={require('../images/nana.png')} /> */}

                <Text style={styles.text}>
                    {"\n"}
                    Logo:
                    {"\n"}
                </Text>

                <Text style={styles.linkText}
                    onPress={() => Linking.openURL('https://www.yasminagodden.com/')}>
                    Yasmina Godden
                        </Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color: '#5C5C5C'
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#5C5C5C'
    },
    linkText: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#5C5C5C',
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})