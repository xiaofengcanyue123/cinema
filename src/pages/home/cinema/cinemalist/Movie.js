import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native';
import Banner from './Banner';
import NaviBar from './NaviBar';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.onNaviBarPress = this.onNaviBarPress.bind(this);
        this.naviStatus = [1, 0];
    }

    onNaviBarPress(aNumber) {
        switch (aNumber) {
            case 0:
                return;
            case 1:
                this.props.navigator.replace({
                    name: 'Cinema'
                });
                return;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NaviBar naviBarStatus={this.naviStatus}
                    onNaviBarPress={this.onNaviBarPress} />
                <View style={styles.whatLeft} >
                <Banner />
                    <Text>这是影片页面</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       // flex: 1
    },
    whatLeft: {
       
        // flex: 1,
        // borderTopWidth: 1,
        // borderColor: 'black',
        // backgroundColor: 'white',
        
        
    }
});