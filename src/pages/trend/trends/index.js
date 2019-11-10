import React, {Component} from 'react'
import {ScrollView, View} from 'react-native'
import Wrapper from './wrapper'
import Banner from './banner'

export default class Index extends Component {

    render() {
        return (
            <View>
                <ScrollView>
                    <Banner  />
                    <Wrapper navigation = {this.props.navigation} />
                </ScrollView>
            </View>
        )
    }
}