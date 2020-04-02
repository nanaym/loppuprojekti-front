import React, { Component } from 'react'
import { Text, View, StyleSheet, Linking } from 'react-native'

import { ActivityIndicator } from 'react-native';

export default class AppInfo extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.title}>About this app</Text>


                <Text style={styles.text}>
                    {"\n"}
                    {"\n"}
                    "Lunchie" is the final project of Academy's Spring 2020 JavaScript class.
                    {"\n"}
                    {"\n"}
                    Team:
                    {"\n"}
                    <Text style={styles.linkText}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/hanna-valli/')}>
                        Hanna Valli
                        </Text>
                    {"\n"}
                    <Text style={styles.linkText}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/oskari-auvinen-70083619b/')}>
                        Oskari Auvinen
                        </Text>
                    {"\n"}
                    <Text style={styles.linkText}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/nana-martin-b9170219b/')}>
                        Nana Martin
                        </Text>
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
    view: {
        margin: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#5C5C5C',
    },
    text: {
        // alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#5C5C5C'    
    },
    linkText: {
        // alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#5C5C5C',
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})