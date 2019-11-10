import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

export default class Still extends Component {

    constructor(props) {
        super(...arguments)
        this.state = {
        }
    }
    render() {
        return (
            <View style={styles.view}>
                <View style={styles.viewtop}>
                    <Text style={styles.viewtop_text}>影视剧照</Text>
                </View>
                <View style={styles.viewmiddle}>
                    <Image
                    style={styles.viewmiddle_img}
                    source={require('‪../../../assets/img/juzhaobig.png')}></Image>
                </View>
                <View style={styles.viewbottom}>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.viewbottom_scrollview}>
                        <Image
                        style={styles.viewbottom_scrollview_item}
                        source={require('‪../../../assets/img/stillsmall1.png')}></Image>
                        <Image
                        style={styles.viewbottom_scrollview_item}
                        source={require('‪../../../assets/img/stillsmall2.png')}></Image>
                        <Image
                        style={styles.viewbottom_scrollview_item}
                        source={require('‪../../../assets/img/stillsmall3.png')}></Image>
                        <Image
                        style={styles.viewbottom_scrollview_item}
                        source={require('‪../../../assets/img/stillsmall2.png')}></Image>
                        <Image
                        style={styles.viewbottom_scrollview_item}
                        source={require('‪../../../assets/img/stillsmall3.png')}></Image>
                        <Image
                        style={styles.viewbottom_scrollview_item}
                        source={require('‪../../../assets/img/stillsmall1.png')}></Image>
                        <View style={{width: 4}}></View>
                    </ScrollView>
                </View>
                <View style={styles.viewlast}>
                    <Text style={styles.viewlast_text}>全部6张剧照</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        height: 460,
    },
    viewtop: {
        height: 40,
        justifyContent: 'center'
    },
    viewtop_text: {
        fontSize: 18,
        marginLeft: 12,
        marginTop: -8
    },
    viewmiddle: {
        alignItems: 'center',
    },
    viewmiddle_img: {
        width: '95%',
        marginBottom: 10,
        borderRadius: 10
    },
    viewbottom: {
        width: '100%',
        height: 140,
    },
    viewbottom_scrollview: {
        marginLeft: 12,
    },
    viewbottom_scrollview_item: {
        height: 140,
        // marginHorizontal: 4,
        marginRight: 8,
        borderRadius: 5
    },
    viewlast: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewlast_text: {
        color: '#68afef',
        fontSize: 16
    }
})