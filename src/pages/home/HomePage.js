import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Button,
    Text,
    Image,
    View,
    TouchableOpacity,
    BackHandler
} from 'react-native';

import MovieTicket from './cinema/cinemalist/MovieTicket'

const tab_home_select = require('../../assets/tabr/home-active.png');
const tab_home = require('../../assets/tabr/home.png');

export default class HomePage extends Component {
    // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
    static navigationOptions = {
        headerTitle: '影院',
        tabBarLabel: '影院',
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Image
              source={focused ? tab_home_select : tab_home}
              style={{ width: 30, height: 30 }}
              resizeMode={'contain'}
            />
          )
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
               <MovieTicket navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});