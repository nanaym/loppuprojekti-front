import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ScreenName from '../components/ScreenName';
import { Ionicons } from '@expo/vector-icons';
import AppInfo from '../components/AppInfo';

const TabIcon = (props) => (
    <Ionicons
        name={'md-apps'}
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
                <AppInfo />
                <ScreenName name={'Info'} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})


