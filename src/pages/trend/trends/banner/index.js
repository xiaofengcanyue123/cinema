import React, { Component } from 'react'
import  styles from './style'
import Swiper from 'react-native-swiper'
import {Dimensions, Image, View} from "react-native"

const { width } = Dimensions.get('window')
export default class Index extends Component {

    render() {
        return (
            <View style={{width:width,paddingBottom:5,backgroundColor:'#fff'}}>
                <Swiper style={styles.wrapper} showsButtons={true} autoplay={true} autoplayTimeout={2.0}>
                    <View style={styles.slide1}>
                        <Image
                            style={{width:width,height:150}}
                            resizeMode='stretch'
                            source={{uri: 'https://yanxuan.nosdn.127.net/c7de7e8850dc05df6943a1a39dce2558.jpg?imageView&thumbnail=0x196'}}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            style={{width:width,height:150}}
                            resizeMode='stretch'
                            source={{uri: 'https://yanxuan.nosdn.127.net/c7de7e8850dc05df6943a1a39dce2558.jpg?imageView&thumbnail=0x196'}}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            style={{width:width,height:150}}
                            resizeMode='stretch'
                            source={{uri: 'https://yanxuan.nosdn.127.net/c7de7e8850dc05df6943a1a39dce2558.jpg?imageView&thumbnail=0x196'}}
                        />
                    </View>
                </Swiper>
            </View>
            )
    }
}