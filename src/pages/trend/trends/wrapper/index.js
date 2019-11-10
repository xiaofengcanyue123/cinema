import React, {Component} from 'react'
import {ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View} from 'react-native'
import styles from './style'
import {Avatar} from 'react-native-elements'
import {HOST, renderImages} from '../../common/common'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: true,
            refreshing: false,
            loading: true,
            trends: []
        }
    }

    componentDidMount() {
        fetch(`${HOST}/dynamic/list`).then((response) => {
                this.setState({refreshing: false})
                return response.json()
            }
        ).then((resp) => {
            if (resp.status == 200) {
                this.setState({trends: resp.result, refreshing: false, loading: false});
            }
        }).catch((error) => {
            console.error(error);
        })
    }

    renderSeparator = () => {
        return (
            <View
                style={styles.separator}
            />
        )
    }

    render() {
        const {navigate} = this.props.navigation
        return (
            <View>
                {
                    this.state.loading ? <ActivityIndicator size="large" style={styles.loading}/>
                        :
                        <FlatList
                            ItemSeparatorComponent={this.renderSeparator}
                            data={this.state.trends}
                            refreshing={this.state.refreshing}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item}) => {
                                return (
                                    <View>
                                        <View
                                            style={styles.top}
                                        >
                                            <View style={styles.avator}>
                                                <Avatar
                                                    size="small"
                                                    rounded
                                                    source={{uri: 'https://yanxuan.nosdn.127.net/c7de7e8850dc05df6943a1a39dce2558.jpg?imageView&thumbnail=0x196'}}
                                                    onPress={() => {
                                                    }}
                                                    activeOpacity={0.7}/>
                                            </View>
                                            <View style={styles.user}>
                                                <Text style={styles.userText}>{item.username}
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
                                        <TouchableOpacity
                                            onPress={() => navigate('Item', {item: item})}
                                        >
                                            <Text numberOfLines={3} style={{
                                                lineHeight: 33,
                                                padding: 10,
                                                fontSize: 18,
                                                paddingLeft: 28, paddingRight: 28
                                            }}>{item.text}</Text>
                                        </TouchableOpacity>
                                        <View>
                                            {renderImages(item).map((value, index) => {
                                                return (
                                                    <View
                                                        key={index.toString()}
                                                        style={{
                                                            flexDirection: 'row',
                                                            paddingLeft: 30,
                                                            paddingRight: 30
                                                        }}>
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
                                                    style={{height: 26, width: 26}}
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
                                                    style={{height: 26, width: 26}}
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
                            }}/>
                }

            </View>
        )
    }
}