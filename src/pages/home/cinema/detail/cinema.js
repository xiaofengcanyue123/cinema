import React, { Component } from "react"

import { StyleSheet, View, ActivityIndicator, Text } from "react-native"
import { Header } from 'react-native-elements'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Info from './info'
import Display from './display'
import MyCustomLeftComponent from '../../../user/userinfo/LeftComponent'
import { initCinema,initCinemaLoaded } from '../../../../actions/cinema-action'
import { ScrollView } from "react-native-gesture-handler"


export default class Cinema extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let cinemaId = this.props.navigation.state.params.cinemaId
    this.props.initCinemaLoadedAction()
    this.props.initCinemaAction(cinemaId);
    //this.fetchData(cinemaId);
  }

  // fetchData(cinemaId) {
  //   fetch('http://45.76.105.46:8080/cinema/detail?cinemaId=' + cinemaId)
  //     .then(response => response.json())
  //     .then(responseData => {
  //       if (responseData.status === '200') {
  //         this.setState({
  //           data: responseData.result,
  //           loaded: true
  //         });
  //       }
  //       else {
  //         alert('请求失败')
  //       }
  //     });
  // }

  render() {
    if (!this.props.loaded) {
      return this.renderLoadingView();
    }
    return (
      <View >
        <Header
          leftComponent={<MyCustomLeftComponent navigation={this.props.navigation} />}
          centerComponent={{ text: '影院位置', style: { color: '#fff' } }}
        //rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <ScrollView>
        {/* <Info info={this.props.data} navigation={this.props.navigation} /> */}
        <Info navigation={this.props.navigation} />
        {/* <Display movieList={this.props.data.movieList} /> */}
        <Display />
        </ScrollView>
      </View>
    );
  }
  renderLoadingView() {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.container} />
    );
  }
}
function matchStateToProps(state) {
  return {
    data: state.cinema.data,
    loaded: state.cinema.loaded
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    initCinemaAction: initCinema,
    initCinemaLoadedAction:initCinemaLoaded
  }, dispatch);
}

module.exports = connect(matchStateToProps, matchDispatchToProps)(Cinema);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});