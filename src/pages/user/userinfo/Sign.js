import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    Alert,
    Button,
    Dimensions
} from 'react-native';

import { Avatar, ListItem, Header, Badge, Tile } from 'react-native-elements';

import { Calendar } from 'react-native-calendars';
import Calendars from './Calendars'
import MyCustomLeftComponent from './LeftComponent'
const widths = Dimensions.get('window').width
export default class Sign extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<MyCustomLeftComponent navigation={this.props.navigation} />}
                    //leftComponent={{ icon: 'chevron-left', color: '#fff' }}
                    centerComponent={{ text: '每日签到', style: { color: '#fff' } }}
                />
                <ScrollView>
                    {/* <Calendar
                    // Initially visible month. Default = Date()
                    current={Date()}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'1990-01-01'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2099-01-01'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => { console.log('selected day', day) }}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => { console.log('selected day', day) }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => { console.log('month changed', month) }}
                    // Hide month navigation arrows. Default = false
                    hideArrows={true}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    renderArrow={(direction) => (<left />)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Hide day names. Default = false
                    hideDayNames={true}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={true}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                /> */}
                    <View style={styles.calend}>
                        <Calendars
                            bgColor='#FFFFFC' //背景颜色
                            headTextColor='#FF9900' //头部文字颜色
                            textColor='#FFCC00' //日期文字颜色
                            activeBgColor='#fb0' //选中背景色
                            activeTextColor='#fff' //选中文字颜色
                            borderRadius={50} //圆角 
                            callback={(data) => { Alert.alert('签到成功' + data) }} //回调方法
                        />
                    </View>
                    <View style={styles.fot}>
                        <Text style={{ marginTop: 10, fontSize: 20, color: '#FFCC00' }}>积分兑好礼</Text>
                        <View style={styles.fotImg}>
                            <View style={styles.fotImg1}>
                                <Image
                                    style={{ width: (widths/2)*0.93, height: 150 }}
                                    source={{
                                        uri: 'https://movie.miguvideo.com/publish/i_www/image/70/612/824.jpg'
                                    }}
                                />
                                <Text style={{ marginLeft: 10 }}>50元电影卡</Text>
                                <Text style={{ marginLeft: 10, color: 'red' }}>￥50</Text>
                            </View>
                            <View style={styles.fotImg1}>
                                <Image
                                    style={{ width: (widths/2)*0.93, height: 150 }}
                                    source={{
                                        uri: 'https://movie.miguvideo.com/publish/i_www/image/70/612/822.jpg'
                                    }}
                                />
                                <Text style={{ marginLeft: 10 }}>100元电影卡</Text>
                                <Text style={{ marginLeft: 10, color: 'red' }}>￥100</Text>
                            </View>
                        </View>
                        <View style={styles.fotImg}>
                            <View style={styles.fotImg1}>
                                <Image
                                    style={{ width: (widths/2)*0.93, height: 150 }}
                                    source={{
                                        uri: 'https://movie.miguvideo.com/publish/i_www/image/70/612/816.jpg'
                                    }}
                                />
                                <Text style={{ marginLeft: 10 }}>500元电影卡</Text>
                                <Text style={{ marginLeft: 10, color: 'red' }}>￥500</Text>
                            </View>
                            <View style={styles.fotImg1}>
                                <Image
                                    style={{ width: (widths/2)*0.93, height: 150 }}
                                    source={{
                                        uri: 'https://movie.miguvideo.com/publish/i_www/image/70/612/826.jpg'
                                    }}
                                />
                                <Text style={{ marginLeft: 10 }}>300元电影卡</Text>
                                <Text style={{ marginLeft: 10, color: 'red' }}>￥300</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    fot: {
        marginTop: 5,
        backgroundColor: '#FFFFFC',
        alignItems: 'center',
        marginBottom: 10,
    },
    fotImg: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFC',
        marginTop: 10,
    },
    fotImg1: {
        marginLeft: 5,
        marginRight: 5,
    }


});