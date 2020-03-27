import React, { Component } from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';


export default class PostNew extends Component {

    render() {
        return (
            <View>
                <Text> Add new date </Text>
                <FormLabel>Name</FormLabel>
                {/* <FormInput onChangeText={someFunction} /> */}
                <FormValidationMessage>Error message</FormValidationMessage>

            </View>
        )
    }
}