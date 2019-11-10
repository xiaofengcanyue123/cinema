import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //当前滚动到哪一页
            currentPage: 1,
            //整数形式的currentPage
            intCP: -1,
            //总共有几页
            pageNum: this.props.movieImageTop.length,
            //记录当前是否为手指拖拽
            ifTouch: false,
            // 当onScroll水平滚动时的滚动大小(x值)的数组
            scrollXArr: [],
            // 当onScroll垂直滚动时的滚动大小(x值)的数组
            scrollYArr: [],
            //scrollView是否可以滚动
            scrollEnabled: true,
            //ScrollView自身View的宽高
            viewHeight: 0,
            viewWidth: 0,
            //图片的长宽
            height: 0,
            width: 0,
            //记录是否是首次
            ifFirst: true,
        }
    }
    static defaultProps = {     
        goToNextPageSpeed: 1
    }

    render() {
        return (
            <View>
                <View style={styles.imagelist} onLayout={this.viewOnLayout}>
                    <ScrollView
                        // 设置引用名称,让下面可以引用到
                        ref={(ps) => { this.scrollView = ps; }}
                        style={styles.scroll_view }
                        scrollEnabled={true}
                        // 是否是水平的scrollView(默认为水平方向的)
                        horizontal={true}
                        // 是否显示水平方向的滚动条
                        showsHorizontalScrollIndicator={false}
                        // 是否显示竖方向的滚动条
                        showsVerticalScrollIndicator={false}
                        // 开始拖拽
                        onScrollBeginDrag={this.onScrollBeginDrag}
                        // 停止拖拽
                        onScrollEndDrag={this.onScrollEndDrag}
                        onScroll={(e) => this.onScroll(e)}
                        //多少毫秒触发一次上面的onScroll方法
                        scrollEventThrottle={20}
                        onLayout={this.scrollViewOnLayout}
                    >
                        {/*渲染scrollView*/}
                        {this.renderScrollView()}
                    </ScrollView>
                </View>
            </View>
        );
    }

    //view加载好之后
    viewOnLayout = () => {

    };

    //scrollView加载好后,自身的尺寸
    scrollViewOnLayout = (event) => {
        let { width, height } = event.nativeEvent.layout;
        this.setState({ viewHeight: height, viewWidth: width }, () => {
        });
    };
    //获得整数型的当前滚动页面
    getintCP() {
        let currentPage = Math.round(this.state.currentPage);
        this.state.intCP = currentPage;
        return currentPage;
    }

    // 渲染scrollView
    renderScrollView = () => {
        let { viewWidth, width, viewHeight, height, pageNum, currentPage } = this.state;
        let { movieImageTop } = this.props
        let arr = []
        this.getintCP()
        //当滚动到当前页的大小为正常大小的多大
        let sL = 1;
        //当滚动到旁边时的大小为正常大小的多大
        let sS = 0.8

        let oL = 1
        //滚到旁边时的透明度
        let oS = 0.5
        //前边的空白
        arr.push(<View key={-2} style={{ width: (viewWidth - width) / 2, height: viewHeight, backgroundColor: '#0000' }} />);
        for (let i = 0; i < movieImageTop.length; i++) {
            if (i === currentPage) {
                arr.push(
                    //判断当前图片是否是正前方图片
                    <TouchableOpacity key={i} style={styles.img_center} onLayout={this.imageLayout}>
                        <Image source={{ uri: movieImageTop[i].movieImg }}
                            style={styles.img_current} />
                    </TouchableOpacity>
                );
            } else {
                arr.push(
                    //判断当前图片是否是正前方图片
                    <TouchableOpacity key={i} style={styles.img_center} onLayout={this.imageLayout}>
                        <Image source={{ uri: movieImageTop[i].movieImg }}
                            style={styles.img_not_current} />
                    </TouchableOpacity>
                );
            }
        }
        //后边的空白
        arr.push(<View key={-3} style={{ width: (viewWidth - width) / 2, height: viewHeight, backgroundColor: '#0000' }} />);
        return arr
    };

    //开始拖拽
    onScrollBeginDrag = () => {
        this.state.ifTouch = true;
        this.state.scrollXArr = [];
        this.state.scrollYArr = [];
    };
    // 停止拖拽(升级后2)
    onScrollEndDrag = (e) => {
        this.state.ifTouch = false;
        //滚动到相应的界面
        this.scrollToPage(this.state.currentPage);
        this.setState({})
    };

    //根据传入的要滚动到的页面数,滚动到相应的页面
    scrollToPage = (currentPage, animated = true) => {
        let pageNum = this.props.ifInfinite ? this.pNum * 3 : this.pNum;
        if (currentPage > pageNum - 1) {
            currentPage = pageNum - 1
        }
        if (currentPage < 0) { currentPage = 0 }
        this.scrollView.scrollTo({ x: currentPage * this.distance, animated: animated })
    };

    // 当滚动scrollView的时候(升级后)
    // 计算当前currentPage
    onScroll = (e) => {
        let scrollPage;
        this.state.scrollXArr.push(e.nativeEvent.contentOffset.x);
        scrollPage = e.nativeEvent.contentOffset.x / 90;
        this.setState({ currentPage: Math.round(scrollPage) }, () => {

        });
    };
    //图片加载好后的尺寸
    imageLayout = (event) => {
        this.getContentStyle(event);
    };
    //获得每一页内容的样式(宽高)
    getContentStyle = (event) => {
        if (this.distance) { return }
        let { width, height } = event.nativeEvent.layout;
        this.setDistance(width, height);
    };
    //设置this.state的宽高和distance
    setDistance = (width, height) => {
        if (this.distance) { return }
        this.setState({ width: width, height: height }, () => {
            this.distance = this.state.width
        });
    };
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "steelblue"
    },
    scroll_view : {
        paddingVertical: 10
    },
    imagelist: {
        height: 200,
        width: "100%",
    },
    img_center: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    img_current: {
        width: 125,
        height: 172,
        margin: 10,
    },
    img_not_current: {
        width: 99,
        height: 136,
        margin: 5,
    },
});



