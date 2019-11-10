import React, { Component } from "react";
import { Image, FlatList, StyleSheet, Text, View, Dimensions,TouchableOpacity } from "react-native";
import { DeviceEventEmitter } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initMovie, setMovieId } from '../../../actions/movielist-action';

var screenWidth = Dimensions.get('window').width;
var cols = 3;
var cellW = 129;
var vMargin = (screenWidth -  cellW * cols) / (cols + 1)

export default class List extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: '',
  //   };
  // }

  componentWillMount() {
    this.props.initMovieAction();
	}

  // componentDidMount() {
  //   this.initdata();
  // }

  // initdata() {
  //   const baseURL = "http://45.76.105.46:8080";
  //   const url1 = "/movie/movieList"
  //   return fetch(baseURL + url1)
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     this.setState({data: responseJson.result});
  //   });
  // }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
        tabBarLabel: '片库',
    }
  }

    render() {
        // let {data} = this.state;
        let data = this.props.movie;
        console.log(data);
        return (
            <FlatList
              data={data}
              renderItem={this.renderMovie}
              style={styles.list}
              keyExtractor={data => data.movieId}
              numColumns ={3}
              // contentContainerStyle={styles.listViewStyle}
            />
          );
    }

    renderMovie = ({ item }) => {
        return (
            <TouchableOpacity style={styles.container}
            onPress={ ()=> {
              // alert(item.movieName)
              DeviceEventEmitter.emit('movieDetails', item.movieId);
              this.props.setMovieIdAction(item.movieId);
            }}>
              <View style={styles.body}>
                <Image source={{uri: item.movieImg}} style={styles.thumbnail} />
                {item.movieName.length>7?<Text style={styles.title}>{item.movieName.substring(0,7)}...</Text>:<Text style={styles.title}>{item.movieName}</Text>}
              </View>
              <View style={styles.score}>
                <Text style={styles.txt}>{item.movieScore}</Text>
              </View>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    container: {
      position: 'relative',
      marginBottom: 8,
      marginLeft: vMargin,
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    thumbnail: {
      width: cellW,
      height: 172,
    },
    title: {
      marginTop: 8,
      textAlign: 'center',
      fontSize: 15
    },
    score: {
      display: 'flex',
      position: 'absolute',
      right: 8,
      bottom: 32,
    },
    txt: {
      color: 'red',
    },
    list: {
      marginTop: 12,
    },
    listViewStyle: {
      flexDirection: 'row',
      flexWrap:'wrap',
      alignItems: 'center'
    }
});

function mapStateToProps(state) {
  console.log(state.movie.data)
	return {
    movie: state.movie.data,
    movieId: state.movieId.id
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
    initMovieAction: initMovie,
    setMovieIdAction: setMovieId
	}, dispatch);
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(List);