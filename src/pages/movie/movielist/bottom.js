import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native';

var screenWidth = Dimensions.get('window').width;
var cols = 3;
var cellW = 125;
var vMargin = (screenWidth -  cellW * cols) / (cols + 1)

export default class Bottom extends Component {

    constructor(props) {
        super(...arguments)
        this.state = {
        }
    }
    render() {
        return (
            <View style={styles.view}>
                <View style={styles.head}>
                    <Text style={{ marginTop: 10, marginLeft: vMargin, fontSize: 17, color: '#000000' }}>最新上线</Text>
                    <TouchableOpacity onPress={ ()=> {alert('2019新片全在这') }}>
                        <Text style={{ marginTop: 10, marginRight: vMargin,fontSize: 15, color: '#666666' }}>2019新片全在这 ! ></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom}>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.bottom_scrollview}>
                        <Image source={require('./image/pic1.png')} style={styles.bottom_scrollview_item} />
                        <Image source={require('./image/pic2.png')} style={styles.bottom_scrollview_item} />
                        <Image source={require('./image/pic3.png')} style={styles.bottom_scrollview_item} />
                        <Image source={require('./image/pic1.png')} style={styles.bottom_scrollview_item} />
                        <Image source={require('./image/pic2.png')} style={styles.bottom_scrollview_item} />
                        <Image source={require('./image/pic3.png')} style={styles.bottom_scrollview_item} />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    bottom: {
        width: '100%',
        height: 172,
        marginBottom: 10
    },
    bottom_scrollview: {
        marginLeft: vMargin,
        marginRight: vMargin,
    },
    bottom_scrollview_item: {
        height: 172,
        width: 125,
        marginRight: 10,
    }
})