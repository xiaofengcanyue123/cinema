import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';
import { Avatar, ListItem, Header, Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class MineScreen extends Component{
    static navigationOptions = {
        drawerLabel: 'Mine',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/tabr/home.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <View>
                  <Header
                    leftComponent={{ icon: 'chevron-left', color: '#fff' }}
                    centerComponent={{ text: '抽屉导航', style: { color: '#fff' } }}
                />

                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back home"
                />

                <Button
                    onPress={()=>this.props.navigation.navigate.openDrawer()}
                    title="open the draw"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});