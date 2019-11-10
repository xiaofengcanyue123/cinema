import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import  styles from './style'
import {Avatar} from "react-native-elements";


export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText:'',
        };       
    }
    
    render() {
        return (
            <View style={{
                height:60,
                paddingLeft: 18,
                paddingRight: 18,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
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
                    flex: 10,
                    marginLeft: 8
                }}>
                    <TextInput
                        onSubmitEditing={ (e) => {
                            this.props.fn(e.nativeEvent.text)
                        }}
                        multiline={false}
                        placeholder={'来吐槽'}
                        placeholderTextColor={'#a2a2a2'}
                        underlineColorAndroid={'transparent'}
                        value = {this.state.inputText}
                        onChangeText={(text) => this.setState({inputText:text})} 
                        style={{
                            width: '98%',
                            backgroundColor: '#dcdcdc',
                            fontSize: 20,
                            color: '#333333',
                            borderRadius: 40,
                            paddingHorizontal: 16,
                            paddingVertical: 0
                        }}
                    />
                    

                </View>
            </View>
        )
    }
}