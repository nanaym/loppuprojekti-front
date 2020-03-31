import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import axios from 'axios';
import { render } from 'react-dom';
import { ListItem } from 'react-native-elements'

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
        <ScrollView >
        {
          this.state.dateList.map((date, i) => (
            <ListItem onPress={() => {
              alert(date.name);
            }}
              badge={{ value: date.time, textStyle: { backgroundColor: '#660066', fontSize: 16 } }}
              key={i}
              title={date.restaurant}
              subtitle={date.name}
              bottomDivider
            />
          ))
        }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    fontSize: 16,
    color: '#5C5C5C'
  }
})