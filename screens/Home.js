import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ScreenName from '../components/ScreenName';
import { Ionicons } from '@expo/vector-icons';
import ExcistingDates from '../components/ExcistingDates';
import PostNew from '../components/PostNew';
import HeaderTab from '../navigation/HeaderTab';


const TabIcon = (props) => (
    <Ionicons
        name={'md-home'}
        size={35}
        color={props.focused ? '#660066' : 'darkgrey'}
    />
)

export default class Home extends React.Component {

    static navigationOptions = {
        tabBarIcon: TabIcon

    };
    render() {
        return (
            <View style={styles.container}>
                <HeaderTab />
                <Text style={styles.title}>Start a new date!</Text>
                <PostNew />
                <Text style={styles.title}>Or join another date:</Text>
                <ScrollView>
                    <ExcistingDates />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#5C5C5C',
        margin: 20
    }
})
