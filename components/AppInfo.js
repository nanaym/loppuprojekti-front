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
                    "Lunchie" is one of the final projects of Academy's Spring 2020 JavaScript class.
                    {"\n"}
                    {"\n"}
                </Text>
                <Text style={styles.subtitle}>
                    Team:
                    {"\n"}

                </Text>

                <View style={styles.viewImg}>

                    <Image
                        source={require('../images/hanna.png')}
                        style={{ width: 150, height: 150 }}
                    />
                    <Text style={styles.linkText}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/hanna-valli/')}>
                        {"\n"}
                        {"\n"}
                        Hanna Valli
                        {"\n"}
                        {"\n"}
                        {"\n"}


                    </Text>
                </View>

                <View style={styles.viewImg}>

                    <Image
                        source={require('../images/oskari.png')}
                        style={{ width: 150, height: 150 }}
                    />

                    <Text style={styles.linkText}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/oskari-auvinen-70083619b/')}>
                        {"\n"}
                        {"\n"}
                    Oskari Auvinen
                        {"\n"}
                        {"\n"}
                        {"\n"}


                    </Text>

                </View>

                <View style={styles.viewImg}>

                    <Image
                        source={require('../images/nana.png')}
                        style={{ width: 150, height: 150 }}
                    />

                    <Text style={styles.linkText}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/nana-martin-b9170219b/')}>
                        {"\n"}
                        {"\n"}
                    Nana Martin
                        {"\n"}
                        {"\n"}

                    </Text>
                </View>

                <Text style={styles.subtitle}>
                    {"\n"}
                    {"\n"}
                    Logo:
                    {"\n"}
                </Text>

                <View style={styles.viewImg}>


                <Image
                    source={require('../images/logo_white.png')}
                    style={{ width: 150, height: 150 }}
                />

                <Text style={styles.linkText}
                    onPress={() => Linking.openURL('https://www.yasminagodden.com/')}>
                    {"\n"}
                    {"\n"}
                    Yasmina Godden
                    {"\n"}
                    {"\n"}

                </Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    view: {
        margin: 20
    },
    viewImg: {
        flexDirection: 'row',
    },
    bottomText: {
        marginBottom: 60
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#5C5C5C',
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#5C5C5C'
    },
    text: {
        fontSize: 18,
        color: '#5C5C5C'
    },
    linkText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#660066',
        fontStyle: 'italic',
        margin: 20

    }
})