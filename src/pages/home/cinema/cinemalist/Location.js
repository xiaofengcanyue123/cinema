import React, { Component } from 'react';
import {
    StyleSheet,  
} from 'react-native';
import {MapView} from 'react-native-amap3d'

export default class Location extends Component {
    render() {

        return <MapView style={StyleSheet.absoluteFill}/>
    }
}
