import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';

import Index from './trends/index' 
const tab_cart_select = require('../../assets/tabr/ticket-active.png');
const tab_cart = require('../../assets/tabr/ticket.png');

export default class CartPage extends Component {
    // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
    static navigationOptions = {
        headerTitle: '动态',
        tabBarLabel: '动态',
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
            <Image
              source={focused ? tab_cart_select : tab_cart}
              style={{ width: 30, height: 30 }}
              resizeMode={'contain'}
            />
          )
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
               <Index navigation={this.props.navigation}/>
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