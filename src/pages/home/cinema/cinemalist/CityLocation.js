import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SectionList,
    Dimensions,
    FlatList,
    StatusBar,
    ScrollView,
} from "react-native"
import cityData from './city-data'


const {width, height} = Dimensions.get('window');
const touchDownBGColor = '#999999';
const touchUpBGColor = 'transparent';
const statusHeight = StatusBar.currentHeight;
const headerHeight = 40;
const sectionWidth = 24;
const sectionTopBottomHeight = 50;
const selectWidth = 80;

const sectionItemHeight = (height - statusHeight - sectionTopBottomHeight * 2 - headerHeight) / 25;

class CitySelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [],
            isTouchDown: false,
            canTouch: false,
            selectText: ''
        };
        this.responderGrant = this.responderGrant.bind(this);
        this.responderMove = this.responderMove.bind(this);
        this.responderRelease = this.responderRelease.bind(this);
        this.scrollSectionList = this.scrollSectionList.bind(this);

    }

    componentDidMount() {
        this.setCurrentLocation('西安');
        setTimeout(() => {
            this.setState({
                sections: cityData,
            });
        }, 100);
        setTimeout(() => {
            this.setState({
                canTouch: true
            })
        }, 1600)
    }

 
    setCurrentLocation(city) {
        cityData[0].data[0].citys[0].city = city;
    }

    render() {
        let sectionView = null
        if (this.state.canTouch) {
            sectionView = this.sectionItemView()
        }
        let sectionTextView = null
        if (this.state.isTouchDown) {
            sectionTextView =
                <View style={cityStyle.selectView}>
                    <Text style={cityStyle.selectTv}>{this.state.selectText}</Text>
                </View>
        }
        return (
            <View>
                <View style={cityStyle.title}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.pop()
                        }}>
                        <Image style={cityStyle.backIcon}
                               source={require('../../../../assets/CinemaList/address.png')}/>
                    </TouchableOpacity>
                    <Text style={cityStyle.title_text}>城市选择</Text>
                    <View style={{width: 25, marginRight: 10}}/>
                </View>
                <View>
                    <SectionList
                        ref="sectionList"
                        renderSectionHeader={this.renderSectionHeader}
                        renderItem={this.renderItem}
                        stickySectionHeadersEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        sections={this.state.sections}
                        keyExtractor={this._extraUniqueKey}
                    />
                    {sectionView}
                    {sectionTextView}
                </View>
            </View>
        );
    }

    responderGrant(event) {
        this.scrollSectionList(event);
        this.setState({
            isTouchDown: true,
        })
    }

    responderMove(event) {
        console.log("responderMove")
        this.scrollSectionList(event);
        this.setState({
            isTouchDown: true,
        })
    }

    responderRelease(event) {
        console.log("onTouchUp")
        this.setState({
            isTouchDown: false,
        })
    }

    scrollSectionList(event) {
        const touch = event.nativeEvent.touches[0];
        if (touch.pageY  >= sectionTopBottomHeight+headerHeight+statusHeight
            && touch.pageY <= statusHeight +headerHeight+sectionTopBottomHeight + sectionItemHeight * 25
            && touch.pageX >= width - sectionWidth
            && touch.pageX <= width
        ) {
            console.log("touchx" + touch.pageX + '.=======touchY' + touch.pageY)
            const index = (touch.pageY - sectionTopBottomHeight - headerHeight) / sectionItemHeight;
            console.log("index" + index);
            if (Math.round(index)>=0&&Math.round(index)<=25){
                this.setState({
                    selectText: this.state.sections[Math.round(index)].key
                })
                this.refs.sectionList.scrollToLocation({
                    animated: true,
                    sectionIndex: Math.round(index),
                    itemIndex: 0,
                    viewOffset: headerHeight
                });
            }

        }
    }

    sectionItemView() {
        const sectionItem = this.state.sections.map((item, index) => {
            if (index === 0) {
                return null
            }
            return <Text key={index}
                         style={
                             [cityStyle.sectionItemStyle,
                                 {backgroundColor: this.state.isTouchDown ? touchDownBGColor : touchUpBGColor}]
                         }>
                {item.key}
            </Text>
        });

        return (
            <ScrollView style={cityStyle.sectionItemViewStyle}
                        ref="sectionItemView"
                        onStartShouldSetResponder={() => true} 
                        onMoveShouldSetResponder={() => true} 
                        onResponderTerminationRequest={() => true}
                        onResponderGrant={this.responderGrant} 
                        onResponderMove={this.responderMove} 
                        onResponderRelease={this.responderRelease} 
            >
                {sectionItem}
            </ScrollView>

        );
    }

    _extraUniqueKey(item, index) {
        return "index" + index + item;
    }

    _extraUniqueKey2(item, index) {
        return "index2" + index + item;
    }

    renderSectionHeader = (info) => {
        let section = info.section.key;
        if (section === '热') {
            section = "热门城市"
        }
        return (<Text
                style={cityStyle.sectionStyle}>{section}</Text>
        )
    };

    renderItem = (info) => {
        return (
            <View>
                <FlatList
                    data={info.section.data[0].citys}
                    horizontal={false}
                    numColumns={4}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => this._createItem(item)}
                    keyExtractor={this._extraUniqueKey2}
                />
            </View>

        )
    };

    _createItem(item) {
        return (
            <TouchableOpacity onPress={this._itemClick.bind(this, item)}>
                <Text style={cityStyle.cityItemTv}>{item.city}</Text>
            </TouchableOpacity>
        );
    }


    _itemClick(item) {
        console.log(item.city)
    }

}

export default CitySelect

export const cityStyle = StyleSheet.create({
        backIcon: {
            width: 25,
            height: 25,
            padding: 5,
            marginLeft: 10
        },
        title: {
            padding: 5,
            flexDirection: 'row',
            height: headerHeight
        },
        title_text: {
            flex: 1,
            textAlign: 'center',
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold'
        },
        itemStyle: {
            height: 60,
            textAlignVertical: 'center',
            backgroundColor: "#ffffff",
            color: '#5C5C5C',
            fontSize: 15
        },
        sectionStyle: {
            height: 50,
            textAlignVertical: 'center',
            backgroundColor: '#F8F8F8',
            paddingLeft: 20,
            color: '#5C5C5C',
            fontSize: 16
        },
        sectionItemViewStyle: {
            position: 'absolute',
            width: sectionWidth,
            height: height - statusHeight,
            right: 0,
            top: 0,
            paddingTop: sectionTopBottomHeight,
            paddingBottom: sectionTopBottomHeight,
        },
        selectView: {
            position: 'absolute',
            width: selectWidth,
            height: selectWidth,
            right: width / 2 - selectWidth / 2,
            top: (height - headerHeight - statusHeight) / 2 - selectWidth / 2,
            backgroundColor: 'rgba(0,0,0,0.2)',
            alignItems: "center",
            justifyContent: 'center',
            borderRadius: 5
        },
        selectTv: {
            fontSize: 32,
            color: '#FFFFFF'
        },
        sectionItemStyle: {
            textAlign: 'center',
            alignItems: 'center',
            height: sectionItemHeight,
            lineHeight: sectionItemHeight
        },
        cityItemTv: {
            color: 'black',
            fontSize: 14,
            width: width / 4,
            textAlign: 'center',
            padding: 10
        }
    }
);

