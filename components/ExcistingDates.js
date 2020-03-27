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
    axios.get(`https://lunchfriend.herokuapp.com/api/person`)
      .then(res => {
        const dateList = res.data;
        this.setState({ dateList });
        console.log(dateList);
      })
  }

  render() {
    //  const {dateList} = this.state;
    return (

      <View style={styles.subtitleView}>
        {
          this.state.dateList.map((date, i) => (
            <ListItem onPress={() => {
              alert(date.name);
            }}
              badge={{ value: date.time, textStyle: { color: '#fff' } }}
              key={i}
              title={date.name}
              subtitle={date.restaurant}
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
  subtitleView: {
    flexDirection: 'col',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})