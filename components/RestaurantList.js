import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ListItem } from 'react-native-elements'

//Tuotu web-view sivujen renderöintiä varten
import WebView from 'react-native-webview';

export default class RestaurantList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Factory Keilaranta </Text>
                <WebView
                    source={{ uri: 'https://www.lounaat.info/lounas/ravintola-factory-keilaranta/espoo' }}
                    style={{ marginTop: 20 }}
                />
                <Text> Lucy in the sky</Text>
                <Text> Amica Let's Play</Text>
                <Text> Ravintola Keilalahti</Text>
                <Text> Sodexo Keilaranta 1</Text>
            </View>



        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
    },
})


const list = [
    { name: "Factory Keilaranta", lunchLink: "https://www.lounaat.info/lounas/ravintola-factory-keilaranta/espoo", uri: "https://ravintolafactory.com/lounasravintolat/ravintolat/espoo-keilaranta/" },
    { name: "Lucy in the Sky", lunchLink: "https://www.lounaat.info/lounas/lucy-in-the-sky/espoo", uri: "https://www.lucyinthesky.fi/lucy-lunch" },
    { name: "Amica Let\'s Play", lunchLink: "https://www.lounaat.info/lounas/amica-lets-play/espoo", uri: "https://www.amica.fi/ravintolat/ravintolat-kaupungeittain/espoo/lets-play/" },
    { name: "Ravintola Keilalahti", lunchLink: "https://www.lounaat.info/lounas/keilaniemi-ravintolat/espoo", uri: "https://vadelmacatering.fi/lounas#lounaslista" },
    { name: "Sodexo Keilaranta 1", lunchLink: "https://www.lounaat.info/lounas/be-keilaranta/espoo", uri: "https://www.sodexo.fi/ravintolat/espoo/keilaranta-1" }
];

