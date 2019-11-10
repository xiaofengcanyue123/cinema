import React, {Component} from 'react';
import {ScrollView,StyleSheet,Text,Image,View,ActivityIndicator,FlatList,DeviceEventEmitter,TouchableOpacity,Dimensions} from 'react-native';

var screenWidth = Dimensions.get('window').width;
var cols = 3;
var cellW = 129;
var vMargin = (screenWidth -  cellW * cols) / (cols + 1)

export default class Test extends Component {

 constructor(){
    super();
    this.page = 1
    this.state = {
        data: [],
        animating: true,
        status:0,
        pageNo:1,      //控制页数
        showFoot: 0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
        isRefreshing: false,//下拉控制
        totalPage:10,
        uid:'',
    };
 }

   componentDidMount() {
    this.fetchData(this.page);
  }

 render() {
    return (
        <View style={styles.bigbox}>
            <FlatList
                data={this.state.data}
                renderItem={this._renderItemView}
                style={styles.list}
                keyExtractor={data => data.movieId}
                numColumns ={3}
                /**
                 * 添加尾巴布局
                 */
                ItemSeparatorComponent={this._separator}
                ListFooterComponent={this._renderFooter.bind(this)}
                /**
                 * 从下往上拉去的时候加载更多
                 */
                onEndReached={this._onEndReached.bind(this)}
                onEndReachedThreshold={0.2}
                /**
                 * 关于下拉刷新
                 */
                onRefresh={this._onRefresh.bind(this)}
                refreshing={this.state.isRefreshing}
            />
            <View style={this.state.animating == true ? styles.animating : styles.hidden}>
                <ActivityIndicator
                animating={this.state.animating}
                style={[styles.centering, {height: 80}]}
                size="small" />
            </View>
            {/* this.state.animating */}
            <View style={this.state.animating == true ? styles.animating : styles.hidden}>
                <Text>加载中...</Text>
            </View>
            <View style={this.state.status == 1 ? styles.zanwu  : styles.hidden}>
                <Text style={{fontSize:20,color:'#ccc'}}>暂无更多数据...</Text>
            </View>
        </View>
    );
 }

    /**
    * 显示FlatList的布局
    */
    _renderItemView=({ item })=>{
        // console.log(item)
        return(
            <View style={item == '' ? styles.hidden: ''}>
                <TouchableOpacity style={styles.container}
                onPress={ ()=> {
                    // alert(item.movieName)
                    DeviceEventEmitter.emit('movieDetails', item.movieId);
                    // this.props.setMovieIdAction(item.movieId);
                }}>
                <View style={styles.body}>
                    <Image source={{uri: item.movieImg}} style={styles.thumbnail} />
                    {item.movieName.length>7?<Text style={styles.title}>{item.movieName.substring(0,7)}...</Text>:<Text style={styles.title}>{item.movieName}</Text>}
                </View>
                <View style={styles.score}>
                    <Text style={styles.txt}>{item.movieScore}</Text>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
    /**
    * 每一个view结束之后的样式
    */
    _separator() {
        return <View style={{ height: 1,}} />;
    }
    /**
    * 加载时加载动画
    */
    _renderFooter() {
        if (this.state.showFoot === 1) {
            return (
                <View style={{ height: 30, alignItems: 'center', justifyContent: 'flex-start', }}>
                    <Text style={{ color: '#999999', fontSize: 14, marginTop: 5, marginBottom: 5, }}>
                        没有更多数据了
                    </Text>
                </View>
            );
        } else if (this.state.showFoot === 2) {
            return (
                <View style={styles.footer}>
                    <ActivityIndicator />
                    <Text>正在加载更多数据...</Text>
                </View>
            );
        } else if (this.state.showFoot === 0) {
            return (
                <View style={styles.footer}>
                    <Text></Text>
                </View>
            );
        }
    }
    /**
    * 下拉方法
    */
    _getHotList=()=>{
        let that=this;
        console.log('开始执行下拉刷新执行的函数');
        that.state.pageNo=1;
        
        that.setState({
            data: [],
            showFoot: 0,
            isRefreshing: false,
        });
        that.componentDidMount();
    }
    _onRefresh=()=>{
        // 不处于 下拉刷新
        console.log('下拉刷新');
        if(!this.state.isRefresh){
            this.page = 1
            this._getHotList()
        }
    }
    /**
    * 上拉触底事件，进行判断
    */
    _onEndReached=()=>{
        // console.log(123456898947534865)
        let that=this;
        console.log(that.state.showFoot)
        // 如果是正在加载中或没有更多数据了，则返回
        if (that.state.showFoot != 0) {
            return;
        } else {
            let page=that.state.pageNo;
            let pages=page+1;
            console.log(pages)
            that.setState({
                pageNo:pages
            });
            that.fetchData(pages);
        }
        //底部显示正在加载更多数据
        that.setState({ showFoot: 2 });   
    }
    //获取数据 
    //网络请求——获取第pageNo页数据
    fetchData(page) {
    //这里进行网络请求数据
        return fetch(`http://45.76.105.46:8080/movie/movieList?page=${page}`)
        .then((res) => {return res.json()})
        .then((resp) => {
            if(resp.status == 200){           
                 console.log(resp);
                this.setState({data: this.state.data.concat(resp.data.result),showFoot: 0});}
            else{
                this.setState({ showFoot: 1});}
        });
    }
}
const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    zanwu:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
    },
    hidden:{
        display:'none'
    },  
    animating:{
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
      },
    bigbox:{
        display:'flex',
    },
    container: {
        position: 'relative',
        marginBottom: 8,
        marginLeft: vMargin,
      },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnail: {
        width: cellW,
        height: 172,
    },
    title: {
        marginTop: 8,
        textAlign: 'center',
        fontSize: 15
    },
    score: {
        display: 'flex',
        position: 'absolute',
        right: 8,
        bottom: 32,
    },
    txt: {
        color: 'red',
    },
    list: {
        marginTop: 12,
    }
});