import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    Alert,
    TouchableOpacity
} from 'react-native';

import { Avatar, ListItem, Header, Badge, Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MyCustomLeftComponent from './LeftComponent'
import ImagePicker from 'react-native-image-crop-picker';

const lists = [
    {
        title: '昵称',
        name: '181****4231',
    },
    {
        title: '性别',
        name: '男',
    },
    {
        title: '位置',
        name: '咪咕星',
    },
    {
        title: '个性签名',
        name: '我的地盘我做主',
    }
]



export default class UserInfo extends Component {

    constructor() {
		super(...arguments)
        this.state ={ 
            uri: 'http://img.cmvideo.cn:8080/publish/voms2/uic_service/picture/userImage/1197/675/74/20190508164351ciqu.png'
        }
    }
     

    _onPressButton(e) {
        Alert.alert(e.title)
    }


    _onPressButtonImage() {
        // 启动相机拍照
        ImagePicker.openCamera({
            width: 400,
            height: 400,
            cropping: true,
            cropperCircleOverlay: true
        }).then(image => {
            console.log('received image', image);
            this.setState({
                uri: image.path                  
              //image: {uri: image.path, width: image.width, height: image.height},
              //images: null
            });
          }).catch(e => alert(e));


        //打开本地相册
        // ImagePicker.openPicker({
        //     width: 300,
        //     height: 400,
        //     cropping: true
        // }).then(image => {
        //     console.log(' 图片路径：' + image);
        // });


        //从相册选择多个图片
        // ImagePicker.openPicker({
        //     multiple: true
        //   }).then(images => {
        //     console.log(images);
        //   });

        //从相册选视频
        // ImagePicker.openPicker({
        //     mediaType: "video",
        //   }).then((video) => {
        //     console.log(video);
        //   });

        //裁剪图片
        // ImagePicker.openCropper({
        //     path: 'my-file-path.jpg',
        //     width: 300,
        //     height: 400
        //   }).then(image => {
        //     console.log(image);
        //   });

    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<MyCustomLeftComponent navigation={this.props.navigation} />}
                    centerComponent={{ text: '个人信息', style: { color: '#fff' } }}
                />
                <ScrollView >
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={()=>{this._onPressButtonImage()}} >
                            <View style={styles.container2}>
                                <Text style={{ fontSize: 18 , marginTop: 30}}>头像</Text>
                                <View style={{ marginLeft: 'auto' }}>
                                <Avatar
                                    rounded
                                    source={{
                                        uri: this.state.uri,
                                    }}
                                    size="large"
                                />
                                </View>
                                <View style={{ marginTop: 30 }}>
                                    <Icon name='chevron-right' color='#999999' />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.line}></View>
                    </View>


                    {lists.map((l,index) =>
                        <View key={index}>
                            <TouchableOpacity onPress={this._onPressButton.bind(this, l)}>
                                <View style={styles.title}>
                                    <Text style={{ fontSize: 18 }}>{l.title}</Text>
                                    <Text style={{ marginLeft: 'auto', fontSize: 18 }}>{l.name}</Text>
                                    <View >
                                        <Icon name='chevron-right' color='#999999' />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.line}></View>
                        </View>
                    )}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }, container1: {
        marginBottom: 10,
    }, container2: {
        padding: 10,
        height: 100,
        flexDirection: 'row',
    }, title: {
        padding: 10,
        height: 50,
        flexDirection: 'row',
    }, line: {
        backgroundColor: '#CCCCCC',
        height: 0.5,
        marginLeft: 10,
        marginRight: 10,
    }
});