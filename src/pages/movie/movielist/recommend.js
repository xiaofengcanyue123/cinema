import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Display from './display';
import Middle from './middle';
import Bottom from './bottom';

export default class HelloWorldApp extends Component {

    constructor(props) {
    super(props);
    this.state = {
      data: {
        movieImageTop: [{movieId: '1', movieImg: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2567998580.webp'},
                        {movieId: '2', movieImg: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2568261402.webp'},
                        {movieId: '3', movieImg: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp'}],
        movieImageMiddle: [{movieId: '1', movieImg: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2567998580.webp', movieName: '我和我的祖国', movieScore: '8.0'},
                          {movieId: '2', movieImg: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2568261402.webp', movieName: '中国机长', movieScore: '7.0'},
                          {movieId: '3', movieImg: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp', movieName: '哪吒之魔童降世', movieScore: '8.6'},
                          {movieId: '4', movieImg: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2567998580.webp', movieName: '我和我的祖国', movieScore: '8.0'},
                          {movieId: '5', movieImg: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2568261402.webp', movieName: '中国机长', movieScore: '7.0'},
                          {movieId: '6', movieImg: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp', movieName: '哪吒之魔童降世', movieScore: '8.6'}]
      },
    };
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
        tabBarLabel: '看片推荐',
    }
  }
  
  render() {
    return (
        <View>
          <ScrollView>
            <Display movieImageTop={this.state.data.movieImageTop} />
            <Middle movieImageMiddle={this.state.data.movieImageMiddle} />
            <Bottom />
          </ScrollView>
        </View>
    );
  }
}