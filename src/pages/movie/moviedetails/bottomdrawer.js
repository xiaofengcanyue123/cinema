import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import BottomDrawer from 'rn-bottom-drawer';

const TAB_BAR_HEIGHT = 0;

export default class MyBottomDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            downDisplay: 1,
            text: 'Get directions to your location'
        }
    }

    renderContent = () => {
        return (
            <ScrollView>
                <TouchableOpacity activeOpacity={1}>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                    <Text style={{ fontSize: 50, textAlign: 'center' }}>{this.state.text}</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }

    render() {
        return (
            <BottomDrawer
                containerHeight={600}
                offset={TAB_BAR_HEIGHT}
                downDisplay={this.state.downDisplay}
                startUp={false}
                ref='mydrawer'
            >
                {this.renderContent()}
            </BottomDrawer>
        )
    }
}