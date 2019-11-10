import React, {Component} from 'react'
import {Dimensions, FlatList, KeyboardAvoidingView, ScrollView, Text, View} from 'react-native'
import Details from './details'
import Footer from './footer'
import {Avatar} from "react-native-elements";
import { Header } from 'react-native-elements';
import MyCustomLeftComponent from '../../user/userinfo/LeftComponent'

const {height} = Dimensions.get('window')
export default class Index extends Component {

    static defaultProps = {
        size: 0,
        preSize: 0,
    }

    constructor(props) {
        super(props)
        this.state = {
            commentTexts: ["默认评论"],
            loading: false
        }
    }

    fn(val){
        const {commentTexts} = this.state
        commentTexts.push(val)
        this.setState({
            commentTexts: commentTexts
        }
        // ,() => {
        //     //这里打印的是最新的state值
        //     alert(this.state.commentTexts);
        // }
        )

        // alert(commentTexts)
        // this.refView.setNativeProps({
        //     data: {commentTexts}
        // })
        this.refs.remove.setState({
            inputText:''
        })
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "7%"
                }}
            />
        )
    }

    render() {
        const {item} = this.props.navigation.state.params
        const {commentTexts} = this.state
        return (
            <KeyboardAvoidingView style={{flex: 1}}>
            <Header
                    leftComponent={<MyCustomLeftComponent navigation={this.props.navigation} />}
                    centerComponent={{ text: '动态详情', style: { color: '#fff' } }}
                />
                <ScrollView style={{height: height}}>               
                    <Details item = {item} />
                    {/*评论信息*/}
                    <FlatList
                        ItemSeparatorComponent={this.renderSeparator}
                        data={commentTexts}
                        extraData ={this.state}
                        //ref={(c) => this.refView = c}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => {
                            return (
                                <View>
                                    <View
                                        style={{height: 40,
                                            paddingLeft: 18,
                                            paddingRight: 18,
                                            flexDirection: 'row',
                                            alignItems: 'center'}}
                                    >
                                        <View style={{
                                            flex: 1,
                                            paddingTop: 3
                                        }}>
                                            <Avatar
                                                size="small"
                                                rounded
                                                source={require('../common/assert/custom.png')}
                                                onPress={() => {
                                                }}
                                                activeOpacity={0.7}/>
                                        </View>
                                        <View style={{
                                            flex: 9,
                                        }}>
                                            <Text style={{
                                                marginLeft: 10,
                                                fontWeight: '900',
                                                fontSize: 15}}>游客{Math.floor(Math.random()*100)}
                                            </Text>
                                        </View>
                                    </View>
                                    <Text
                                        style={{
                                            lineHeight: 33,
                                            padding: 10,
                                            fontSize: 18,
                                            color: '#333333',
                                            paddingLeft: 28, paddingRight: 28
                                        }}>{item}</Text>
                                </View>
                            )
                        }}/>
                    <View style={{height:60}} />
                </ScrollView>
                {/* borderTopWidth: 1, */}
                
                <View style={{height:60,backgroundColor:'#F5FCFF',  borderTopColor: '#BBBBBB',
                    position: 'absolute', bottom: 0, left: 0, right: 0}}>
                    <Footer ref='remove' fn={this.fn.bind(this)}/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}