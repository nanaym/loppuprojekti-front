import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import axios from 'axios';
import { render } from 'react-dom';
import { ListItem } from 'react-native-elements'
import DialogInput from 'react-native-dialog-input';
import moment from "moment";

export default class ExcistingDates extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: {
        id: '',
        name: '',
        restaurant: '',
        time: ''
      },
      isDialogVisible: false
    }
  }
  
  showDialog(boolean){
    return this.setState({isDialogVisible: boolean});
  }

  joinDate = (newName) => {
    let id = this.state.date.id
    console.log(newName)
    console.log(this.state.date)
    console.log(id)
    let post = { id: id, name: this.state.date.name + ', ' + newName, restaurant: this.state.date.restaurant, time: this.state.date.time }
    axios.put(`https://lunchfriend.herokuapp.com/api/person/${id}`, post)
      .then((response) => {
        console.log(response);
        this.showDialog(false)
        this.props.fetchAllRestaurants();
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    const showDialog = this.state.isDialogVisible


    return (

      <View style={styles.text}>
                <DialogInput isDialogVisible={showDialog}
                title={"Have lunch with awesome " + this.state.date.name}
                message={"Attending in " + this.state.date.restaurant + " at " + this.state.date.time}
                hintInput={"Insert name"}
                submitInput={(newName) => { this.joinDate(newName) }}
                closeDialog={() => { this.showDialog(false) }}>
              </DialogInput>
        <ScrollView >
          { //LISÄÄ SORT DATELIST TÄHÄN
            this.props.dateList.map((date, i) => (
              <ListItem onPress={() => {
                this.showDialog(true), this.setState({ date: date });
              }}
                badge={{ value: date.time, textStyle: { backgroundColor: '#660066', fontSize: 16 } }}
                key={i}
                title={date.restaurant}
                subtitle={date.name}
                bottomDivider
              />
              )
            )
        }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    fontSize: 16,
    color: '#5C5C5C'
  }
})