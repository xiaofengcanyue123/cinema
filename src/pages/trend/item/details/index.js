import React, { Component } from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import  styles from './style'
import {renderImages} from '../../common/common'
import {Avatar} from "react-native-elements";

export default class Index extends Component {
    render() {
        const {item} = this.props
        return (
            <View>
                <View
                    style={styles.top}
                >
                    <View style={{
                        flex: 1,
                        paddingTop: 3
                    }}>
                        <Avatar
                            size="small"
                            rounded
                            source={{uri: 'https://yanxuan.nosdn.127.net/c7de7e8850dc05df6943a1a39dce2558.jpg?imageView&thumbnail=0x196'}}
                            onPress={() => {
                            }}
                            activeOpacity={0.7}/>
                    </View>
                    <View style={{
                        flex: 9,
                    }}>
                        <Text style={{
                            marginLeft: 22,
                            fontWeight: '900',
                            fontSize: 15}}>{item.username}
                        </Text>
                    </View>
                    <View style={{
                        flex: 0
                    }}>
                        <TouchableOpacity onPress={() => alert('关注')} style={styles.follow}>
                            <Text style={{
                                color: '#FF4E65',
                                fontWeight: '900'
                            }}>+ 关注</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text
                    style={{
                        lineHeight: 33,
                        padding: 10,
                        fontSize: 18,
                        color: '#333333',
                        paddingLeft: 28, paddingRight: 28
                    }}>{item.text}</Text>
                <View>
                    {renderImages(item).map((value, index) => {
                        return (
                            <View
                                key={index.toString()}
                                style={{flexDirection: 'row', paddingLeft: 30, paddingRight: 30} }>
                                {value}
                            </View>
                        )
                    })}
                </View>
                <View style={{height: 30, flexDirection: 'row-reverse'}}>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 33
                    }}>
                        <Image
                            style={{height:26, width: 26}}
                            resizeMode='stretch'
                            source={require('../../common/assert/comm.png')}/>
                        <Text
                            style={{
                                marginRight: 2,
                                color: '#9d9d9d',
                                marginBottom: 0,
                                fontSize: 18
                            }}
                        >{item.commentNum}</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginRight: 10
                    }}>
                        <Image
                            style={{height:26, width: 26}}
                            resizeMode='stretch'
                            source={require('../../common/assert/like.png')}/>
                        <Text
                            style={{
                                marginRight: 3,
                                color: '#9d9d9d',
                                marginBottom: 0,
                                fontSize: 18
                            }}
                        >{item.likeNum}</Text>
                    </View>
                </View>
            </View>
        )
    }
}