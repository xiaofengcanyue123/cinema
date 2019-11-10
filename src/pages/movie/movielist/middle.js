import React, { Component } from "react";
import { Image, FlatList, StyleSheet, Text, View, Dimensions,TouchableOpacity } from "react-native";

var screenWidth = Dimensions.get('window').width;
var cols = 3;
var cellW = 125;
var vMargin = (screenWidth -  cellW * cols) / (cols + 1)

export default class Middle extends Component {
    render() {
        let { movieImageMiddle } = this.props
        return (
            <View>
                <View style={styles.head}>
                    <Text style={{ marginTop: 10, marginLeft: vMargin, fontSize: 17, color: '#000000' }}>热门推荐 (免费)</Text>
                    <TouchableOpacity onPress={ ()=> {alert('万部大片随心选') }}>
                        <Text style={{ marginTop: 10, marginRight: vMargin,fontSize: 15, color: '#666666' }}>万部大片随心选 ></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <FlatList
                        data={movieImageMiddle}
                        renderItem={this.renderMovie}
                        style={styles.list}
                        keyExtractor={data => data.movieId}
                        numColumns ={3}
                        // contentContainerStyle={styles.listViewStyle}
                    />
                </View>
            </View>

        );
    }

    renderMovie = ({ item }) => {
        return (
            <TouchableOpacity style={styles.container} onPress={ ()=> {alert('影片') }}>
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

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    container: {
        position: 'relative',
        marginBottom: 8,
        marginLeft: vMargin,
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: 'red'
    },
    thumbnail: {
        width: cellW,
        height: 172,
    },
    title: {
        marginTop: 8,
        fontSize: 13
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
        marginTop: 0,
    },
    listViewStyle: {
        flexDirection: 'row',
        flexWrap:'wrap',
        alignItems: 'center'
    }
});
