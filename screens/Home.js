import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ScreenName from '../components/ScreenName';
import { Ionicons } from '@expo/vector-icons';
import ExcistingDates from '../components/ExcistingDates';
import PostNew from '../components/PostNew';

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
                <PostNew />
                <Text>
                    {"\n"}
                </Text>
                <ExcistingDates />
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
