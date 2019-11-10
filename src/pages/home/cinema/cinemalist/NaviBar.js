import React, { Component } from 'react';
import {
    
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';

var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

export default class NaviBar extends Component {
    componentWillMount() {
        this.buttonColors = this.props.naviBarStatus.map(
            function (aNumber) {
                if (aNumber == 0) return 'white';
                return 'red';
            }
        );
    }

    _naviTab0Pressed() {
        this.props.onNaviBarPress(0);
    }

    _naviTab1Pressed() {
        this.props.onNaviBarPress(1);
    }

    render() {
        return (
            <View style={styles.naviRow}>
                
                <View style={styles.position}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('CityLocation')
                    }}>
                        <View style={styles.backIcon}>
                            <Text style={styles.font}>
                                西安
                        </Text>
                            <Image
                                style={styles.showMore}
                                source={require('../../../../assets/CinemaList/show_more_city.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                

                <View style={styles.position}>
                    <TouchableOpacity onPress={this._naviTab0Pressed.bind(this)}>
                        <View style={[styles.button, { backgroundColor: this.buttonColors[0] }]}>
                            <Text style={styles.textStyle1}>
                                影片
                        </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._naviTab1Pressed.bind(this)}>
                        <View style={[styles.button, { backgroundColor: this.buttonColors[1] }]}>
                            <Text style={styles.textStyle1}>
                                影院
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.position}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('LocationCinema')
                    }}>
                        <View>
                            <Image
                                style={styles.address}
                                source={require('../../../../assets/CinemaList/address.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Search')
                    }}>
                        <View >
                            <Image
                                style={styles.search}
                                source={require('../../../../assets/CinemaList/search.png')}
                            />

                        </View>

                    </TouchableOpacity>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    naviRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'flex-start',
        //height: deviceHeight-30,
    },

    backIcon: {
        flexDirection: 'row',
        width: 35,
        height: 30,
    },

    font: {
        fontSize: 17,
        textAlign: "center",
        top: 4,
    },

    showMore: {
        flexDirection: 'row',
        width: 35,
        height: 30,
        top: 0,
    },

    address: {
        flexDirection: 'row',
        width: 40,
        height: 30,
    },

    search: {
        marginTop: 3,
        flexDirection: 'row',
        width: 20,
        height: 20,
    },


    button: {
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 1,
        width: 80,
        height: 30,
        textAlign: 'center',
        lineHeight: 30,
        color: 'red',
        fontSize: 15,
    },

    textStyle1: {
        fontSize: 20,
        textAlign: 'center',
    },

    position: {
        flexDirection: 'row',
    }
});