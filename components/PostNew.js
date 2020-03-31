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
    setName = (event) => {
        // console.log(event.nativeEvent.text)
        this.setState({name: event.nativeEvent.text})
        // console.log(this.state);
    }
    setRestaurant = (e) => {
        // console.log(e);
        this.setState({ restaurant: e });
        // console.log(this.state);
    }
    setTime = (e) => {
        // console.log(e);
        this.setState({ time: e });
        // console.log(this.state);
    }
    
    ButtonPress = (body = this.state) => {
    
     console.log(body)
     console.log("ButtonPress")
        // function nameInput(e) {
        //     console.log(e)
        // }
       
        if (body.name == '' || body.restaurant == '' || body.time == '') {
            alert('All fields must be filled')
        } else {
            axios.post(`https://lunchfriend.herokuapp.com/api/person`, body)
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
                {/* <Divider style={{ backgroundColor: '#660066' }} /> */}
                <Text>
                    {"\n"}
                </Text>
                <Input style={styles.input}
                    placeholder='Enter name'
                    onChange = {(text) => this.setName(text)}
                />
                <Text>
                    {"\n"}
                </Text>
                <Picker style={{ marginLeft: 20, marginRight: 20}}
                    onValueChange={(itemValue, itemIndex) => this.setRestaurant(itemValue)}>
                    <Picker.Item label="-- Choose restaurant --" value="empty" />
                    <Picker.Item label="Factory" value="Factory" />
                    <Picker.Item label="Lucy in the Sky" value="Lucy in the Sky" />
                    <Picker.Item label="Amica Let's Play" value="Amica Let's Play" />
                    <Picker.Item label="Ravintola Keilalahti" value="Ravintola Keilalahti" />
                    <Picker.Item label="Sodexo Keilaranta 1" value="Sodexo Keilaranta 1" />
                </Picker>
                <Text>
                    {"\n"}
                </Text>
                <Picker style={{ marginLeft: 20, marginRight: 20}}
                    onValueChange={(itemValue, itemIndex) => this.setTime(itemValue)}
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
                <Text>
                    {"\n"}
                </Text>
                <Button style={styles.button}
                    onPress={() => this.ButtonPress()}
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