import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';

import User from './userinfo/UserInfo'

const tab_user_select = require('../../assets/tabr/user-active.png');
const tab_user = require('../../assets/tabr/user.png');

export default class UserPage extends Component {
    // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式
    static navigationOptions = {
        headerTitle: '我的',
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Image
              source={focused ? tab_user_select : tab_user}
              style={{ width: 30, height: 30 }}
              resizeMode={'contain'}
            />
          )
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <User navigation={this.props.navigation}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

UserPage.router = User.router;