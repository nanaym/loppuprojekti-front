import React, { Component } from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, Picker, TextInput } from 'react-native';
import { Input, Button, Divider } from 'react-native-elements';
import axios from 'axios';

export default class PostNew extends Component {

    render() {

        function ButtonPress() {
            axios.post('https://lunchfriend.herokuapp.com/api/person', {
                name: Input.name,
                restaurant: Input.restaurant,
                time: Input.time
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        return (
            <View>

                <Divider style={{ backgroundColor: '#660066' }} />

                <Input style={styles.input}
                    placeholder='Enter name'
                />

                <Picker>
                    <Picker.Item label="-- Choose restaurant --" value="empty" />
                    <Picker.Item label="Factory" value="factory" />
                    <Picker.Item label="Lucy in the sky" value="lucyinthesky" />
                    <Picker.Item label="Amica Let's Play" value="amicaletsplay" />
                    <Picker.Item label="Ravintola Keilalahti" value="ravintolakeilalahti" />
                    <Picker.Item label="Sodexo Keilaranta 1" value="sodexokeilaranta1" />
                </Picker>

                <Picker>
                    <Picker.Item label="-- Choose time --" value="empty" />
                    <Picker.Item label="10:30" value="1030" />
                    <Picker.Item label="10:45" value="1045" />
                    <Picker.Item label="11:00" value="1100" />
                    <Picker.Item label="11:15" value="1115" />
                    <Picker.Item label="11:30" value="1130" />
                    <Picker.Item label="11:45" value="1145" />
                    <Picker.Item label="12:00" value="1200" />
                    <Picker.Item label="12:15" value="1215" />
                    <Picker.Item label="12:30" value="1230" />
                    <Picker.Item label="12:45" value="1245" />
                    <Picker.Item label="13:00" value="1300" />
                </Picker>


                <Button style={styles.button}
                    onPress={ButtonPress()}
                    title="Add date"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        padding: 5
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        fontSize: 16,
    },
    picker: {

    }
});