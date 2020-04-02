import React, { Component } from 'react'
import { Text, View, StyleSheet, Linking, Image } from 'react-native'

export default class AppInfo extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.title}>About this app
                {"\n"}
                </Text>

                <Text style={styles.text}>
                    {"\n"}
                    "Lunchie" is a final project of Academy's Spring 2020 JavaScript class.
                    {"\n"}
                    {"\n"}
                    Team:
                    {"\n"}
                </Text>
                <Image
                    source={require('../images/hanna.png')}
                    style={{ width: 150, height: 150 }}
                />
                    <Text style={styles.linkText}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/hanna-valli/')}>
                        Hanna Valli
                    {"\n"}
                        </Text>
                    <Image
                    source={require('../images/oskari.png')}
                    style={{ width: 150, height: 150 }}
                />
                    <Text style={styles.linkText}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/oskari-auvinen-70083619b/')}>
                        Oskari Auvinen
                    {"\n"}
                        </Text>
                    <Image
                    source={require('../images/nana.png')}
                    style={{ width: 150, height: 150 }}
                />
                    <Text style={styles.linkText}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/nana-martin-b9170219b/')}>
                        Nana Martin
                        </Text>
                <Text style={styles.text}>
                    {"\n"}
                    Logo:
                    {"\n"}
                </Text>
                <Image
                    source={require('../images/logo_white.png')}
                    style={{ width: 150, height: 150 }}
                />

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
    bottomText: {
        marginBottom: 60
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#5C5C5C',
    },
    text: {
        fontSize: 16,
        color: '#5C5C5C'
    },
    linkText: {
        fontSize: 16,
        color: '#5C5C5C',
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})