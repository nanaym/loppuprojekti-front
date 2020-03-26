import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { render } from 'react-dom';
import { ListItem } from 'react-native-elements'

export default class ExcistingDates extends Component {
  state = {
    dateList: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/api/person/`)
      .then(res => {
        const dateList = res.data;
        this.setState({ dateList });
        console.log(dateList);
      })
  }

  render() {
    //  const {dateList} = this.state;
    return (

      <View>
        {
          this.state.dateList.map((date, i) => (
            <ListItem
              key={i}
              Name={date.name}
              Restaurant={date.restaurant}
              Time={date.time}
              bottomDivider
            />
          ))
        }
      </View>

      //   <table>
      //   { this.state.dateList.map(date => 
      //   <tr>{date.name} - {date.restaurant} - {date.time} o'clock</tr>)}
      //   </table>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
}})