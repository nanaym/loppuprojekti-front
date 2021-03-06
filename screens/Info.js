import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ScreenName from '../components/ScreenName';
import { Ionicons } from '@expo/vector-icons';
import AppInfo from '../components/AppInfo';
import HeaderTab from '../navigation/HeaderTab';

const TabIcon = (props) => (
    <Ionicons
        name={'ios-information-circle'}
        size={35}
        color={props.focused ? '#660066' : 'darkgrey'}
    />
)

export default class Info extends React.Component {
    static navigationOptions = {
        tabBarIcon: TabIcon
    };
    render() {
        return (
            <View style={styles.container}>

                <HeaderTab />
                <ScrollView>
                <AppInfo />
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})


