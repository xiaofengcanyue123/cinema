import React, { Component } from 'react';

import { Navigator } from 'react-native-deprecated-custom-components';

import Movie from './Movie';
import Cinema from './Cinema';

export default class MovieTicket extends Component {

    configureScene() {
        return Navigator.SceneConfigs.FadeAndroid;
    }

    renderScene = (router, navigator) => {
        console.log(router.name)
        switch (router.name) {
            case 'Movie':
                return <Movie navigator={navigator} navigation={this.props.navigation} />;
            case 'Cinema':
                return <Cinema navigator={navigator} navigation={this.props.navigation} />;
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Navigator
                initialRoute={{ name: 'Cinema' }}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    }
}