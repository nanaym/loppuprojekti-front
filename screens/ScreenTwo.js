import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ScreenName from '../components/ScreenName';

import { Ionicons } from '@expo/vector-icons';

const TabIcon = (props) => (
    <Ionicons
        name={'md-apps'}
        size={35}
        color={props.focused ? 'grey' : 'darkgrey'}
    />
)

export default class ScreenTwo extends React.Component {

    static navigationOptions = {
        tabBarIcon: TabIcon
    };

    render() {
        return (
            <View style={styles.container}>
                <ScreenName name={'Screen2'} />
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