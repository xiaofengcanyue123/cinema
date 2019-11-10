import React, { Component } from "react";
import { Image, FlatList, StyleSheet, Text, View, TouchableOpacity} from "react-native";
// import { SearchBar } from 'react-native-searchbar';
import { SearchBar } from 'react-native-elements';

export default class Head extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  updateSearch = search => {
    this.setState({ search: search });
  };

  render() {
    let { search } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <SearchBar
            lightTheme
            placeholder="搜索影片和影人"
            onChangeText={this.updateSearch}
            value={search}
            round={true}
            searchIcon={()=><Image style={styles.pic} source={require('./image/search.png')} />}
            containerStyle={styles.elesearch}
            inputContainerStyle={styles.insearch}
          />
        </View>
        <TouchableOpacity onPress={()=>{alert('点击了')}}>
            <Image style={styles.img} source={require('./image/download.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{alert('点击了')}}>
            <Image style={styles.img} source={require('./image/time.png')}></Image>
          </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    height: 30,
  },
  search: {
    width: '80%',
  },
  pic: {
    height: 20,
    width: 20,
  },
  img: {
    height: 27,
    width: 27,
  },
  elesearch: {
    // backgroundColor: 'red',
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0, 
  },
  insearch: {
    // backgroundColor: 'red',
    backgroundColor: '#F4F4F4',
  }
});