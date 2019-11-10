import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import NaviBar from './NaviBar';
import Banner from './Banner';
import List from './List';
export default class Cinema extends Component {

    constructor(props) {
        super(props);
        this.onNaviBarPress = this.onNaviBarPress.bind(this);
        this.naviStatus = [0, 1];
    }

    onNaviBarPress(aNumber) {     
        switch (aNumber) {
            case 0:
                this.props.navigator.replace({
                    name: 'Movie'
                });
                return;
            case 1:
                return;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NaviBar naviBarStatus={this.naviStatus}//控制颜色
                    onNaviBarPress={this.onNaviBarPress}//控制点击
                 
                   navigation={this.props.navigation} />
                <View style={styles.whatLeft}>
                    <Banner />
                    <List navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    whatLeft: {  
      flex: 1, 
    }
});