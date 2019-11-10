import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator,createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';


import LoginPage from '../pages/login/Login';     // 登录
import GesturePdPage from '../pages/login/GesturePassword';     // 手势登录
import HomePage from '../pages/home/HomePage';   // 影院
import MoviePage from '../pages/movie/index';   // 看片
import TrendPage from '../pages/trend/IndexPage';   // 动态
import UserPage from '../pages/user/UserPage';   // 我的


import CineMaPage from '../pages/home/cinema/detail/cinema' //影院位置
import LocationPage from '../pages/home/cinema/detail/location' //影院详情

import CityLocationPage from '../pages/home/cinema/cinemalist/CityLocation' //位置页面
import LocationCinemaPage from '../pages/home/cinema/cinemalist/Location' //影院地图位置
import SearchPage from '../pages/home/cinema/cinemalist/Search' //影院搜索


import ItemPage from '../pages/trend/item/index'  //动态详情
import WarpPage from '../pages/trend/trends/wrapper/index' //动态详情

import OrderPage from '../pages/user/userinfo/Order';   // 我的订单
import SignPage from '../pages/user/userinfo/Sign';     // 每日签到
import UserDetilPage from '../pages/user/userinfo/UserDetil';//个人详细信息

import MovieDetailsPage from '../pages/movie/moviedetails/newindex';//电影详情页

import WebViewPage from '../pages/user/userinfo/WebView';//商城WebView

import HomeScreen from '../pages/drawer/HomeScreen';
import MineScreen from '../pages/drawer/MineScreen';

//抽屉导航
const DrawerTabs = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
        //注册View页面名称
        navigationOptions: () => ({
            header:null,
            gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
          })
    },
    Cate: {
        screen: MineScreen,
        //注册View页面名称
        navigationOptions: () => ({
            header:null,
            gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
          })
    },
},
    {
        drawerWidth: 200, // 抽屉宽
        drawerPosition: 'left', // 抽屉在左边还是右边
        drawerLockMode: 'unlocked',//设置是否响应手势
        useNativeAnimations: true,
        contentOptions: {
            initialRouteName: 'Home', // 默认页面组件
            activeTintColor: 'white',  // 选中文字颜色
            activeBackgroundColor: '#ff8500', // 选中背景颜色
            inactiveTintColor: '#666',  // 未选中文字颜色
            inactiveBackgroundColor: '#fff', // 未选中背景颜色
            style: {  // 样式

            }
        }
    }
);

// 底部导航
const Tabs = createBottomTabNavigator({
    Home: {
        screen: HomePage,
    },
    Movie: {
        screen: MoviePage,
    },
    Trend: {
        screen: TrendPage,
    },
    User: {
        screen: UserPage,
    }
}, {
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        activeTintColor: 'red', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 14, // 文字大小
        },
    },
});

//堆栈导航
export const HomeStack  = createStackNavigator({    
    Login: {
        screen: LoginPage,
         //注册View页面名称
         navigationOptions: () => ({
            header:null,
            gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
          })
    },
    GesturePd: {
        screen: GesturePdPage,
         //注册View页面名称
         navigationOptions: () => ({
            header:null,
            gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
          })
    },
    Tab: {
        screen: Tabs,
         //注册View页面名称
         navigationOptions: () => ({
            header:null,
            gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
          })
    },
    Item: {
        screen: ItemPage,
        //注册View页面名称
        navigationOptions: () => ({
        header:null,
        gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
      })
    },
    Warp: {
        screen: WarpPage,
        //注册View页面名称
        navigationOptions: () => ({
        header:null,
        gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
      })
    },
    Order: {
        screen: OrderPage,
        //注册View页面名称
        navigationOptions: () => ({
        header:null,
        gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
      })
    },
    Sign: {
        screen: SignPage,
        //注册View页面名称
        navigationOptions: () => ({
        header:null,
        gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
      })
    },
    UserDetil: {
        screen: UserDetilPage,
        //注册View页面名称
        navigationOptions: () => ({
        header:null,
        gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
      })
    },
    WebView: {
        screen: WebViewPage,
        //注册View页面名称
        navigationOptions: () => ({
        header:null,
        gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
      })
    },   
    CineMa: {
        screen: CineMaPage,
        //注册View页面名称
        navigationOptions: () => ({
        header:null,
        gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
      })
    },

    Location: {
        screen: LocationPage,
        //注册View页面名称
        navigationOptions: () => ({
        header:null,
        gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
      })
    },

    LocationCinema: {
        screen: LocationCinemaPage,
        //注册View页面名称
        navigationOptions: () => ({
        header:null,
        gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
      })
    },
    CityLocation:{
        screen: CityLocationPage,
        //注册View页面名称
        navigationOptions: () => ({
        header:null,
        gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
      })
    },
    Search:{
        screen: SearchPage,
        //注册View页面名称
        navigationOptions: () => ({
        header:null,
        gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
      })
    },
    MovieDetails: {
        screen: MovieDetailsPage,
        //注册View页面名称
        navigationOptions: () => ({
        header:null,
        gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
      })
    },
    MyDrawer: {
        screen: DrawerTabs,
        //注册View页面名称
        navigationOptions: () => ({
        header:null,
        gesturesEnabled: true  //是否可以使用手势来关闭此屏幕。在iOS上默认为true，在Android上默认为false
      })
    },
},
{
    initialRouteName: 'Login', //默认页面
    // initialRouteName: 'MovieDetails', //默认页面
    mode: 'card',
    headerMode: 'screen',
}
)

export default createAppContainer(HomeStack);