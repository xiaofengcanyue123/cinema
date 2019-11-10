import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Alter } from 'react-native';
import { connect } from 'react-redux';
import {initCinemas} from '../../../../actions/cinemas-action';
import { bindActionCreators } from 'redux';

export default class List extends Component {

  _extraUniqueKey(item, index) {
    return "index" + index + item;
  }
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentWillMount() {
		this.props.initCinemasAction('1');
	}

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.cinemas}
          keyExtractor={this._extraUniqueKey}
          renderItem={({ item, key }) =>

            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('CineMa', { cinemaId: item.cinemaId })
            }} underlayColor="red">

              <View key={key} style={styles.cinema}>

                <View style={styles.viewdetail}>
                  <Text style={styles.cineName} >{item.cineName}</Text>
                  <Text style={styles.miniprice}>￥{item.miniprice}元起</Text>
                </View>

                <View style={styles.viewdetail}>
                  {item.location.length > 23 ? <Text style={styles.location}>
                    {item.location.substring(0, 23)}...</Text> : <Text style={styles.location}>{item.location}</Text>}
                </View>

                <View style={styles.viewdetail1}>
                  {item.label.map((index, key) =>
                    <Text key={key} style={styles.label}> {index}</Text>
                  )}
                </View>

              </View>
            </TouchableOpacity>

          }
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
	return {
    cinemas: state.cinemas.data
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		initCinemasAction: initCinemas
	}, dispatch);
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(List);

var styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 28,  
  },
  
  cinema: {
    marginTop: 2,
    marginBottom: 2,
    borderBottomWidth: 1,
    marginLeft: 6,
    borderBottomColor: '#e7e7e7',
  },

  viewdetail: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
  },

  viewdetail1: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 100,
  },

  cineName: {
    textAlign: "left",
    color: '#666',
    fontSize: 16,
  },

  miniprice: {
    textAlign: "right",
    color: 'red',
    fontSize: 13,
    marginRight: 9,
  },

  location: {
    color: '#666',
    fontSize: 14,
    textAlign: "left",
  },

  cinemaDistance: {
    color: '#666',
    fontSize: 10,
    textAlign: "right",
  },

  label: {
    borderRadius: 8,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    margin: 3,
    backgroundColor: "#d0d0d0",
    color: 'white',
    fontSize: 12
  }

});