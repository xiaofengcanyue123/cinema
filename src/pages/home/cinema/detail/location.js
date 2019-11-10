import React, { Component } from "react";

import { StyleSheet, View } from "react-native";

import { Header } from 'react-native-elements';
import Map from './map'
import MyCustomLeftComponent from '../../../user/userinfo/LeftComponent'

export default class Location extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let info = this.props.navigation.state.params.info;
    // let { info } = this.props
    return (
      <View style={styles.content}>
        <Header
          leftComponent={<MyCustomLeftComponent navigation={this.props.navigation} />}
          centerComponent={{ text: '影院位置', style: { color: '#fff' } }}
        />
        {/* <Map info={info} /> */}
        <Map />
      </View>
    );
  }
}



var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "steelblue"
  },
  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "skyblue"
  }
});