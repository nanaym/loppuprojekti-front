import React, { Component } from 'react';
import { render } from 'react-dom';
import { View, Text, Button, StyleSheet, Picker, TextInput } from 'react-native';
import { Input, Divider } from 'react-native-elements';
import axios from 'axios';

// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'JWT fefege...'
// }
export default class PostNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            restaurant: '',
            time: ''
        }
    }

    ButtonPress() {

        // function nameInput(e) {
        //     console.log(e)
        // }
        setRestaurant = (e) => {
            console.log(e + 'restaurant');
            this.setState({ restaurant: e });
        }

        setTime = (e) => {
            console.log(e + 'time');
            this.setState({ time: e });
        }

        if (Input.name == '' || Input.restaurant == '' || Input.time == '') {
            alert('All fields must be filled')
        } else {
            axios.post(`http://localhost:8000/api/person`, {
                // headers: headers,
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
    }

    render() {
        return (
            <View>

                <Divider style={{ backgroundColor: '#660066' }} />

                <Input style={styles.input}
                    placeholder='Enter name'
                // ref = {nameInput}
                />

                <Picker
                    selectedValue={selectedValue}
                    // style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setRestaurant(itemValue)}>
                    <Picker.Item label="-- Choose restaurant --" value="empty" />
                    <Picker.Item label="Factory" value="factory" />
                    <Picker.Item label="Lucy in the sky" value="lucyinthesky" />
                    <Picker.Item label="Amica Let's Play" value="amicaletsplay" />
                    <Picker.Item label="Ravintola Keilalahti" value="ravintolakeilalahti" />
                    <Picker.Item label="Sodexo Keilaranta 1" value="sodexokeilaranta1" />
                </Picker>

                <Picker
                    selectedValue={time}
                    // style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
                >
                    <Picker.Item label="-- Choose time --" value="empty" />
                    <Picker.Item label="10:30" value="10:30" />
                    <Picker.Item label="10:45" value="10:45" />
                    <Picker.Item label="11:00" value="11:00" />
                    <Picker.Item label="11:15" value="11:15" />
                    <Picker.Item label="11:30" value="11:30" />
                    <Picker.Item label="11:45" value="11:45" />
                    <Picker.Item label="12:00" value="12:00" />
                    <Picker.Item label="12:15" value="12:15" />
                    <Picker.Item label="12:30" value="12:30" />
                    <Picker.Item label="12:45" value="12:45" />
                    <Picker.Item label="13:00" value="13:00" />

                </Picker>


                <Button style={styles.button}
                    onPress={() => ButtonPress()}
                    title="Add date"
                    color="#660066"
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
        fontSize: 16
    },
    picker: {
        fontSize: 26
    }
});