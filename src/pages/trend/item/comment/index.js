import React, {Component} from 'react'
import {Image, Text, View} from 'react-native'

export default class Index extends Component {


    render() {
        const item = []
        return (
            <View>
                <View style={{
                    height: 40,
                    paddingLeft: 18,
                    paddingRight: 18,
                    flexDirection: 'row',
                    alignItems: 'left'
                }}>
                    <Text>
                        {item.length === 0 ? '评论' : (item.length + '条评论')}
                    </Text>
                </View>
                {
                    item.length === 0 ?
                        <View style={{height: 150}}>
                            <View style={{flex: 9}}>
                                <Image
                                    resizeMode='center'
                                    source={require('./assert/no_comm.png')}
                                />
                            </View>
                            <View style={{flex: 1,
                                paddingLeft: 18,
                                paddingRight: 18,
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 22,
                                    color: '#dcdcdc'
                                }}>
                                    暂无热评，快来吃第一只螃蟹吧
                                </Text>
                            </View>
                        </View> :
                        <View/>
                }
            </View>
        )
    }
}