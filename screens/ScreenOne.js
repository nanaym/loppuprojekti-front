import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ScreenName from '../components/ScreenName';

import { Ionicons } from '@expo/vector-icons';
import PostNew from '../components/PostNew';
import ExcistingDates from '../components/ExcistingDates';

const TabIcon = (props) => (
    <Ionicons
        name={'md-home'}
        size={35}
        color={props.focused ? 'grey' : 'darkgrey'}
    />
)

export default class ScreenOne extends React.Component {

    static navigationOptions = {
        tabBarIcon: TabIcon

    };
    render() {
        return (
            <View style={styles.container}>
                <PostNew/>
                <ExcistingDates/>
                <ScreenName name={'Etusivu'} />
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
