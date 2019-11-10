import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import List from './list';
import Recommend from './recommend'
import Video from './video'
import Test from './test'

  const TabContent = createMaterialTopTabNavigator (
    {
      ListTab: {
        screen: Test,
        navigationOptions: {
          tabBarLabel: '片库',
        }
      },
      RecommendTab: {
        screen: Recommend,
        navigationOptions: {
            tabBarLabel: '看片推荐',
        }
      }, 
      VideoTab: {
        screen: Video,
        navigationOptions: {
            tabBarLabel: '小视频',
        }
      }, 
  },
    {
      initialRouteName: 'ListTab',
      swipeEnabled: true,
      animationEnabled: true,
      lazy: false,
      tabBarPosition:'top',
      tabBarOptions: {
        activeTintColor: 'red',
        labelStyle: {
          fontSize: 15,
          color: 'black'
        },
        style: {
          backgroundColor: 'white',
        },
      }
    }
)

const Tab = createAppContainer(TabContent);

module.exports = Tab

