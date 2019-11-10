import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    StatusBar,
    BackHandler
} from 'react-native';

import Orientation from 'react-native-orientation';

import VideoPlayer from 'react-native-video-controls';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initMovieDetail, resetMovieDetail } from '../../../actions/moviedetail-action';

import Still from './still'
// import MyBottomDrawer from './bottomdrawer'

class Index extends Component {

    constructor(props) {
        super(...arguments)
        this.state = {
            isfullscreen: false,
            isvideoend: false,
            loadVideo: true,
            isShouCang: false,
            paused: false,

            // moviedata: {
            //     movieActor: '',
            //     moviePath: '',
            //     // movieImg: '',
            //     movieTime: '',
            //     movieScore: '',
            //     // movieId: '',
            //     movieName: ''
            // }
        }
    }

    //在backForAndroid方法作出需要的操作
    backForAndroid = () => {
        if (this.state.isfullscreen == true) {
            this.setState({ isfullscreen: false })
            this.refs.video.state.isFullscreen = false
            Orientation.lockToPortrait()
            return true
        }
        return false
    }

    componentDidMount() {
        //监听到设备触发返回键时，调用backForAndroid方法
        BackHandler.addEventListener('hardwareBackPress', this.backForAndroid);
        // Orientation.addOrientationListener((orientation) => {
        //     alert(orientation)
        //     console.log(orientation)
        //     if (orientation == 'LANDSCAPE') {
        //         this.setState({ flag: true })
        //     }
        // })
        this.props.initMovieDetail(this.props.navigation.state.params.num)
        // this.props.initMovieDetail('3')
        // fetch(`http://45.76.105.46:8080/movie/movieDetail?movieId=${this.props.navigation.state.params.num}`).then((res) => {
        //     // this.setState({refreshing: false})
        //     return res.json()
        // }
        // ).then((resp) => {
        //     if (resp.status == 200) {
        //         this.setState({ moviedata: resp.result });
        //     }
        // }).catch((error) => {
        //     console.error(error);
        // })
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backForAndroid);
        this.props.resetMovieDetail()

    }

    EnterFullscreen = () => {
        this.setState({ isfullscreen: true })
        // this.refs.video.player.ref.presentFullscreenPlayer()
        // this.setHidden(true)
        Orientation.lockToLandscape();
        // alert('点击了')
    }
    // ExitFullscreen = () => {
    //     this.setState({ isfullscreen: false })
    //     // this.refs.video.player.ref.dismissFullscreenPlayer()
    //     Orientation.lockToPortrait()
    // }
    back = () => {
        if (this.state.isfullscreen) {
            this.setState({ isfullscreen: false })
            // this.refs.video.setState({isFullscreen: false})
            this.refs.video.state.isFullscreen = false
            // this.refs.video.player.ref.dismissFullscreenPlayer()
            Orientation.lockToPortrait()
        } else {
            // alert('返回功能还未完成')
            this.props.navigation.goBack()
        }
    }

    handleEnd = () => {
        this.setState({ isvideoend: true })
        // // this.refs.video.setState({seekerPosition: 0,
        // //     seekerFillWidth: 0})
        // this.refs.video.setSeekerPosition()
        // this.refs.video.seekTo()
        // // this.refs.video.state.paused = true
        // // this.refs.video._togglePlayPause()
        // this.refs.video.resetControlTimeout()
        // this.refs.video._togglePlayPause()
    }

    onReStart = () => {
        //在这里设置VideoPlayer的重新播放
        this.setState({ loadVideo: false, isvideoend: false }, () => {
            this.setState({ loadVideo: true }, () => {
                // if (this.state.isfullscreen) {
                //     this.refs.video.player.ref.presentFullscreenPlayer()
                // }
            })
        })
    }

    _onPressButton = () => {
        alert('购票功能暂未完成，敬请期待！')
    }

    onChangeShouCang = () => {
        // alert('dddddd')
        if (this.state.isShouCang) {
            this.setState({ isShouCang: false })
        } else {
            this.setState({ isShouCang: true })
        }
    }

    handlePause = () => {
        this.state.paused = true
    }

    handlePlay = () => {
        this.state.paused = false
    }

    AlertText = () => {
        alert('功能暂未完成，敬请期待！')
    }

    // ShowMovieInfoDetail = () => {
    //     // this.refs.drawer.refs.mydrawer.setCurrentPosition({x: 0, y: 400})
    //     // this.refs.drawer.refs.mydrawer.setState({currentPosition: {x: 0, y: 700}})
    //     // this.refs.drawer.setState({text: 'fdfdfddffd'})
    // }

    render() {
        return (
            <View>
                <StatusBar backgroundColor="black"
                    hidden={this.state.isfullscreen}
                    ref='statusbar' />
                <View style={styles.view}>
                    <View style={[styles.viewvideo, this.state.isfullscreen ? { height: '100%' } : {}]}>
                        {this.state.loadVideo && <VideoPlayer
                            // source={require('‪../../../assets/video/videotest.mp4')}
                            // source={{ uri: "http://vd4.bdstatic.com/mda-hkvnttxa9jm7e2dh/sc/mda-hkvnttxa9jm7e2dh.mp4" }}
                            source={{ uri: this.props.moviedata.moviePath }}
                            // source={{ uri: "http://www.iqiyi.com/w_19s9n5twd9.html" }}
                            navigator={this.props.navigator}
                            videoStyle={styles.video_Video}   //内部依赖的Video的样式
                            // style={styles.video_View}     //内部Video所在的View的样式
                            seekColor='red'
                            controlTimeout={5000}
                            showOnStart={false}
                            toggleResizeModeOnFullscreen={false}  //这是全屏按钮的默认逻辑，若要自定义全局按钮的功能，请设置为false
                            onEnterFullscreen={this.EnterFullscreen}
                            onPause={this.handlePause}
                            onPlay={this.handlePlay}
                            // onExitFullscreen={this.ExitFullscreen}
                            onBack={this.back}
                            onEnd={this.handleEnd}
                            ref='video'
                            disableFullscreen={this.state.isfullscreen}
                            paused={this.state.paused}
                        // repeat={true}
                        />}
                        {this.state.isvideoend && <View style={[styles.video_endview, this.state.isfullscreen && { height: '100%' }]}>
                            <Text
                                style={this.state.isfullscreen ? styles.video_endview_text2 : styles.video_endview_text1}
                                onPress={this.back}>{this.state.isfullscreen ? '退出全屏' : '返回'}</Text>
                            <Text
                                style={styles.video_endview_text2}
                                onPress={this.onReStart}>点击重播</Text>
                        </View>}
                    </View>
                    <View style={styles.viewmiddle}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
                            {/* <Text style={{ fontSize: 50 }}>Hello World!!!!</Text> */}
                            <View style={styles.middle}>
                                <View style={styles.middle_top}>
                                    <Text style={styles.middle_top_text}>{this.props.moviedata.movieName}</Text>
                                    <TouchableHighlight
                                        onPress={this.ShowMovieInfoDetail}
                                        underlayColor='#FFFFFF'>
                                        <View style={styles.middle_top_view}>
                                            <Text style={styles.middle_top_view_text}>详情</Text>
                                            <Image
                                                style={styles.middle_top_view_img}
                                                source={require('‪../../../assets/img/youjiantougary.png')}></Image>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                                <View style={styles.middle_middle}>
                                    <Text style={styles.middle_middle_left}>{this.props.moviedata.movieScore} 分</Text>
                                    <Text style={styles.middle_middle_right}>{this.props.moviedata.movieTime}</Text>
                                </View>
                                <View style={styles.middle_bottom}>
                                    <TouchableHighlight underlayColor='#FFFFFF'
                                        onPress={this.AlertText}>
                                        <View style={styles.middle_bottom_left}>
                                            {/* <Image
                                                source={require('‪../../../assets/img/xiaoxi.png')}
                                                style={styles.middle_bottom_left_left}></Image> */}
                                            <Text style={styles.middle_bottom_left_left}>主演：</Text>
                                            <Text style={styles.middle_bottom_left_right}>{!this.props.moviedata.movieActor ? '' : this.props.moviedata.movieActor.substring(3).replace(/,/g, ' ')}</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <View style={styles.middle_bottom_right}>
                                        <TouchableHighlight
                                            onPress={this.AlertText}
                                            underlayColor='#FFFFFF'><Image
                                                source={require('‪../../../assets/img/xiazai.png')}
                                                style={styles.middle_bottom_right_left}></Image>
                                        </TouchableHighlight>

                                        {!this.state.isShouCang && <TouchableHighlight
                                            onPress={this.onChangeShouCang.bind(this)}
                                            underlayColor='#FFFFFF'><Image
                                                source={require('‪../../../assets/img/shoucang.png')}
                                                style={styles.middle_bottom_right_middle}></Image>
                                        </TouchableHighlight>}
                                        {this.state.isShouCang && <TouchableHighlight
                                            onPress={this.onChangeShouCang.bind(this)}
                                            underlayColor='#FFFFFF'><Image
                                                source={require('‪../../../assets/img/shoucangred.png')}
                                                style={styles.middle_bottom_right_middle}></Image>
                                        </TouchableHighlight>}

                                        <TouchableHighlight
                                            onPress={this.AlertText}
                                            underlayColor='#FFFFFF'><Image
                                                source={require('‪../../../assets/img/zhuanfa.png')}
                                                style={styles.middle_bottom_right_right}></Image>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                                <View style={styles.middle_last}>
                                    <View style={styles.middle_last_line}></View>
                                </View>
                            </View>
                            <Still></Still>
                        </ScrollView>
                    </View>
                    <View style={styles.viewbottom}>
                        <TouchableOpacity
                            style={styles.touchableOpacity}
                            onPress={this._onPressButton}>
                            <Text style={{ color: '#FFFFFF', fontSize: 20 }}>特惠购票</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <MyBottomDrawer ref='drawer' ></MyBottomDrawer> */}
            </View>
        );
    }
};


function mapStateToProps(state) {
    return {
        loaded: state.MovieDetailReducer.loaded,
        moviedata: state.MovieDetailReducer.data
    }
}
function macthDispatchToProps(dispatch) {
    return bindActionCreators({
        initMovieDetail: initMovieDetail,
        resetMovieDetail: resetMovieDetail
    }, dispatch);
    // return {
    //     initMovieDetail: dispatch(initMovieDetail),
    //     resetMovieDetail: resetMovieDetail
    // }
}
export default connect(mapStateToProps, macthDispatchToProps)(Index);

var styles = StyleSheet.create({
    view: {
        // backgroundColor: 'green',
        height: '100%',
    },



    viewvideo: {
        // flex: 1,
        height: 304,
        backgroundColor: 'black'
    },
    video_View: {
        // position: 'absolute'
        // height: 253,

    },
    video_Video: {
        // height: 304,
    },
    video_endview: {
        position: 'absolute',
        width: '100%',
        height: 304,
        backgroundColor: 'black',
        opacity: 0.8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    video_endview_text1: {
        fontSize: 18,
        color: '#FFFFFF',
        borderStyle: 'solid',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 40,
        paddingVertical: 3,
        marginHorizontal: 20,
        marginTop: 60,
    },
    video_endview_text2: {
        fontSize: 18,
        color: '#FFFFFF',
        borderStyle: 'solid',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 3,
        marginHorizontal: 20,
        marginTop: 60,
    },



    viewmiddle: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    middle: {
        height: 150,
        // backgroundColor: 'green'
    },
    middle_top: {
        height: '30%',
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    middle_top_text: {
        fontSize: 21,
        marginLeft: 12,
        marginTop: 15
    },
    middle_top_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
        marginTop: 8
    },
    middle_top_view_text: {
        fontSize: 15,
        color: '#9c9c9c'
    },
    middle_top_view_img: {
        width: 13,
        height: 13,
        marginTop: 2
    },
    middle_middle: {
        height: '30%',
        flexDirection: 'row',
        // justifyContent: 'flex-start'
        alignItems: 'center'
    },
    middle_middle_left: {
        marginLeft: 12,
        color: '#ff3e40',
        fontSize: 17
    },
    middle_middle_right: {
        marginLeft: 18,
        // color: 'black',
        fontSize: 14
    },
    middle_bottom: {
        height: '30%',
        // backgroundColor: '#2dcc9f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    middle_bottom_left: {
        width: 140,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 12
    },
    middle_bottom_left_left: {
        fontSize: 15
    },
    middle_bottom_left_right: {
        // marginLeft: 5
        fontSize: 10,
        color: 'gray'
    },
    middle_bottom_right: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 150,
        marginRight: 12
    },
    middle_bottom_right_left: {
        width: 25,
        height: 25
    },
    middle_bottom_right_middle: {
        width: 27,
        height: 27
    },
    middle_bottom_right_right: {
        width: 25,
        height: 25
    },
    middle_last: {
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    middle_last_line: {
        width: '92%',
        height: 1,
        backgroundColor: '#e6e6e6'
    },



    viewbottom: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    touchableOpacity: {
        height: 54,
        width: '90%',
        borderRadius: 27,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff3e40',
        overflow: 'hidden'
    }
});