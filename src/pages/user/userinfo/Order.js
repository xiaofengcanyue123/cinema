import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    Alert,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MyCustomLeftComponent from './LeftComponent'

import { initUsShow } from '../../../actions/user-action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Order extends Component {

    constructor() {
        super(...arguments)
    }

    componentDidMount() {
        this.props.initUsShowAction();
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<MyCustomLeftComponent navigation={this.props.navigation} />}
                    centerComponent={{ text: '我的订单', style: { color: '#fff' } }}
                />
                <ScrollView>
                    <FlatList
                        //data={this.state.list}
                        data={this.props.data}
                        keyExtractor={(item, indx) => item.orderId}
                        renderItem={({ item, index }) =>
                            <View key={item.orderId} style={styles.orders}>
                                <View style={styles.title}>
                                    <Text style={styles.item}>
                                        {item.cineName}
                                    </Text>
                                    <Text style={styles.item1}>
                                        实付款：<Text style={styles.item11}>{item.totalPrice}</Text>元
                                     </Text>
                                </View>

                                <View style={styles.line}>
                                </View>

                                <View style={styles.mid}>
                                    <View style={styles.midImg}>
                                        <Image
                                            style={{ width: 120, height: 180 }}
                                            source={{
                                                uri: 'https://movie.miguvideo.com/mta-service/filmpictrue/230419.jpg'
                                            }}
                                        />
                                    </View>

                                    <View style={styles.midtext}>
                                        <Text style={styles.item2}> {item.movieName}({item.pieces}张)</Text>
                                        <Text style={styles.item3}> {item.showTime}</Text>
                                        <Text style={styles.item4}> 4号厅 8排8座</Text>
                                    </View>
                                </View>

                                <View style={styles.line}>
                                </View>

                                <View style={styles.bot}>
                                    <Text style={styles.item9}>
                                        已出票
                                    </Text>
                                </View>
                            </View>
                        } />
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
    orders: {
        height: 310,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,

    },
    title: {
        flexDirection: 'row',

    },
    item: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        fontSize: 18,
    },
    item1: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 10,
        fontSize: 18,
    },
    item11: {
        color: '#CC0000',
    },
    line: {
        backgroundColor: '#CCCCCC',
        height: 0.5,
        marginLeft: 10,
        marginRight: 10,
    },
    mid: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
    },
    midImg: {
        marginRight: 20,
    },

    item2: {
        marginBottom: 30,
        fontSize: 23,
    },
    item3: {
        fontSize: 15,
    },
    item4: {
        fontSize: 15,
    },
    bot: {
        marginTop: 10,
        marginBottom: 10,
    },
    item9: {
        marginLeft: 'auto',
        marginRight: 10,
        fontSize: 18,
        color: '#00CC33',
    },
});


function mapStateToProps(state) {
    return {
        data: state.userorder.data
    }
}
function macthDispatchToProps(dispatch) {
    return bindActionCreators({
        initUsShowAction: initUsShow,
    }, dispatch);
}

export default connect(mapStateToProps, macthDispatchToProps)(Order);