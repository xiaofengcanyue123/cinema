import React, { Component } from "react";

import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { connect } from 'react-redux'
export default class Info extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {info}=this.props
    return (
      <View style={styles.info}>
        <Text style={styles.name}>{info.cineName}</Text>
        <View style={styles.location}>
          <Text>{info.location}</Text>
          {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Location',{info:info})}} > */}
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Location')}} >
            <Image style={styles.img} source={require('../../../../assets/CinemaList/location.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.tags}>
          {info.label.map((item,index)=>{
            return (<Text key={index} style={styles.tags_text}>{item}</Text>);           
          })}
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
	return {
		info: state.cinema.data
	}
}

module.exports = connect(mapStateToProps)(Info);

var styles = StyleSheet.create({
  info: {
    height: 120,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white"
  },
  tags: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  tags_text: {
    borderRadius: 8,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    margin: 3,
    backgroundColor: "#d0d0d0",
    color: 'white',
    fontSize: 12
  },
  location: {
    flexDirection: "row",
  },
  img: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  }
});