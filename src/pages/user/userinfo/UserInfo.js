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

import { Avatar, ListItem, Header, Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const list = [
    {
        name: '我的订单',
        avatar_url: 'http://movie.miguvideo.com/lovev/miguMovie/images/order.png',
        subtitle: 'My Order'
    },
    {
        name: '我的钱包',
        avatar_url: 'http://movie.miguvideo.com/lovev/miguMovie/images/wallet.png',
        subtitle: 'My Wallet'
    }
]

const list1 = [
    {
        name: '常见问题',
        avatar_url: 'http://movie.miguvideo.com/lovev/miguMovie/images/question.png',
        subtitle: 'Common Problem'
    },
    {
        name: '在线客服',
        avatar_url: 'http://movie.miguvideo.com/lovev/miguMovie/images/serv-online.png',
        subtitle: 'Online Service'
    }
]

const list2 = [
    {
        name: '商城',
        avatar_url: 'http://movie.miguvideo.com/lovev/miguMovie/images/shopping.png',
        subtitle: 'Shopping Mall'
    },
    {
        name: '约票',
        avatar_url: 'http://movie.miguvideo.com/publish/i_www/image/70/175/949.png',
        subtitle: 'Approximate votes'
    }
]

export default class UserInfo extends Component {

    _onPressButton(e) {
        console.log(e);
        if (e.name === '我的订单') {
            this.props.navigation.navigate('Order')
        }
        else {
            Alert.alert(e.name)
        }
    }

    _onPressButton2(e) {
        console.log(e);
        Alert.alert(e.name)
    }

    _onPressButton1(e) {
        console.log(e);
        Alert.alert(e.name)
    }


    render() {
        return (
            <ScrollView style={styles.container}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: '我的', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />

                <View style={styles.titles}>             
                    <View style={styles.ph}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('UserDetil')}>
                        <Avatar
                            rounded
                            source={{
                                uri: 'http://img.cmvideo.cn:8080/publish/voms2/uic_service/picture/userImage/1197/675/74/20190508164351ciqu.png',
                            }}
                            size="large"
                            
                        />
                    </TouchableOpacity>
                    </View>
                    <View style={styles.id}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('UserDetil')}>
                        <Text>181****4231</Text>
                        <Text style={{ fontSize: 14,marginTop:2,color:'#6699FF' }} >查看个人主页></Text>
                    </TouchableOpacity>
                    </View>
                    

                    <View style={styles.sign}>
                      <View style={styles.signbk} > 
                      <View style={styles.signbk1}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign')}>
                      <Text style={{ fontSize: 14,marginTop:3,marginLeft:5}} >簽</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={styles.signbk2}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign')}>
                      <Text style={{ fontSize: 16,marginTop:2,color:'#FFFFFF' }} >已签到2天</Text>
                      </TouchableOpacity>
                      </View>
                      </View>
                    </View>
                </View>

                <View style={styles.listItem}>
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{ source: { uri: l.avatar_url }//, size:'120' 
                                }}                               
                                title={l.name}
                                subtitle={l.subtitle}
                                bottomDivider
                                chevron
                                //onPress={this._onPressButton.bind()}
                                onPress={this._onPressButton.bind(this, l)
                                    //() => navigate('My')
                                }
                            />
                        ))
                    }
                </View>


                <View style={styles.listItem}>
                    {
                        list1.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                                
                                title={l.name}
                                subtitle={l.subtitle}
                                bottomDivider
                                chevron
                                onPress={this._onPressButton2.bind(this, l)}
                            />
                        ))
                    }
                </View>


                <View style={styles.listItem}>
                    {
                        list2.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                               
                                title={l.name}
                                subtitle={l.subtitle}
                                bottomDivider
                                chevron
                                onPress={() => this.props.navigation.navigate('WebView')}
                            //()=>this.show("XX")
                            />
                        ))
                    }
                </View>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    titles: {
        flexDirection: 'row',
    },
    ph: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10
    },
    id: {
        marginTop: 35,
        marginLeft: 10
    },
    sign: {
        marginTop: 35,
        marginLeft: 'auto',
        marginRight: 10,
    },
    signbk:
    {
      alignItems:'center',
      width: 120,
      height: 30,
      backgroundColor:'#FF9900',
      borderRadius:20,
      flexDirection: 'row',
    },
    signbk1:
    {
     marginLeft:5,
     borderRadius:100,
     backgroundColor:'#FFFFCC',
     width:25,
     height:25,
    },
    signbk2:
    {
     marginLeft:5,
    },
    listItem: {
        marginTop: 10
    }
});