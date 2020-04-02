import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import axios from 'axios';
import { render } from 'react-dom';
import { ListItem } from 'react-native-elements';
import moment from "moment";

export default class ExcistingDates extends Component {
  state = {
    dateList: []
  }

  componentDidMount() {
    axios.get(`https://lunchfriend.herokuapp.com/api/restaurants`)
      .then(res => {
        const dateList = res.data;
        this.setState({ dateList });
        console.log(dateList);
      })
  }


  render() {

    return (

      <View style={styles.text}>
        {
          this.state.dateList.map((date, i) => (
            <ListItem style={styles.listItem}
              onPress={() => {
                alert(date.name);
              }}
              badge={{ value: moment(new Date(date.time)).format('LTS'), textStyle: { backgroundColor: '#660066', fontSize: 16 } }}
              key={i}
              title={date.restaurant}
              subtitle={date.name}
              bottomDivider
            />
          ))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    fontSize: 16,
    color: '#5C5C5C',
  }
})