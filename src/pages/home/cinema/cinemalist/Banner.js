import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
var {
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get('window');
const { width, height } = Dimensions.get('window');

export default class Banner extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: deviceWidth, height: 140 } });
  }

  render() {
    return (
      <View onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={3300}
          style={this.state.size}
          autoplay
        >
          <View>
            <Image
              source={{
                uri: 'http://movie.miguvideo.com/publish/i_www//image/70/81/783.jpg',
              }}
              style={styles.banner}
            />
          </View>

          <View>
            <Image
              source={{
                uri: 'http://movie.miguvideo.com/publish/i_www//image/70/81/783.jpg',
              }}
              style={styles.banner}
            />
          </View>

          <View><Image
            source={{
              uri: 'http://movie.miguvideo.com/publish/i_www//image/70/81/783.jpg',
            }}
            style={styles.banner}
          /></View>
        </Carousel>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  banner: {
    width: deviceWidth,
    height: 140,
  }
});

