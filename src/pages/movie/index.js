import React, { Component } from "react";
import { Image, FlatList, StyleSheet, Text, View, Dimensions, } from "react-native";
import { DeviceEventEmitter } from 'react-native';
import Head from './movielist/head'
import Tab from './movielist/tab';

var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

const tab_cate_select = require('../../assets/tabr/mov-active.png');
const tab_cate = require('../../assets/tabr/mov.png');

export default class Index extends Component {
  // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
  static navigationOptions = {
    headerTitle: '看片',
    tabBarLabel: '看片',
    tabBarIcon: ({ focused, horizontal, tintColor }) => (
      <Image
        source={focused ? tab_cate_select : tab_cate}
        style={{ width: 30, height: 30 }}
        resizeMode={'contain'}
      />
    )
  };

  componentDidMount () {
    this.movieDetailsListener = DeviceEventEmitter.addListener('movieDetails', (item)=>{
      // alert(item)
      this.props.navigation.navigate('MovieDetails',{num: item})
    });
  }

  componentWillUnmount () {
    this.movieDetailsListener.remove();
  }

  render() {
    return (
      // style={{ height: screenHeight-40, width: screenWidth }}
      <View style={{flex: 1}}>
        <Head />
        <Tab />
      </View>
    );
  }
}