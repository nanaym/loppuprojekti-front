import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ScreenName from '../components/ScreenName';
import { Ionicons } from '@expo/vector-icons';
import ExcistingDates from '../components/ExcistingDates';
import PostNew from '../components/PostNew';
import HeaderTab from '../navigation/HeaderTab'
import axios from 'axios';

const TabIcon = (props) => (
    <Ionicons
        name={'md-home'}
        size={35}
        color={props.focused ? '#660066' : 'darkgrey'}
    />
)

export default class Home extends React.Component {
    constructor(props){
        super(props)
      this.state = {
        loading: false,
        dateList: [],

      }
    }
      

    static navigationOptions = {
        tabBarIcon: TabIcon

    };

    componentDidMount() {
        this.fetchAllRestaurants();
      }
    
      fetchAllRestaurants = () => {
        axios.get(`https://lunchfriend.herokuapp.com/api/restaurants`)
          .then(res => {
            const dateList = res.data;
            const alterList = function () {
              for (let b = 0; b < dateList.length; b++) {
                dateList[b] = { name: dateList[b].name, restaurant: dateList[b].restaurant, time: dateList[b].time };
              }
              return dateList;
            }
            this.setState({ dateList });
          
    
            console.log("home.js rivi 51 ",dateList);
    
          })
      }
    
    render() {
        return (
            <View style={styles.container}>
                <HeaderTab />
                <PostNew  fetchAllRestaurants={this.fetchAllRestaurants}/>
                <ScrollView>
                <ExcistingDates loading={this.state.loading} dateList={this.state.dateList} fetchAllRestaurants={this.fetchAllRestaurants}/>
                </ScrollView>
            
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})