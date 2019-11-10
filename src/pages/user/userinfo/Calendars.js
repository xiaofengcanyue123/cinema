/**
 * 日历组件
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native'

import moment from 'moment'
import lodash from 'lodash'
import PropTypes from 'prop-types'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      myMonth: moment(new Date()).format('YYYY年MM月')
    }
  }
  componentDidMount() {
    this.monthDay(moment(new Date()).format('YYYY-MM-DD'))
  }
  monthDay = date => {
    var daysArr = []
    var currentWeekday = moment(date)
      .date(1)
      .weekday() // 获取当月1日为星期几
    var currentMonthDays = moment(date).daysInMonth() // 获取当月天数
    if (currentWeekday == 0) {
      //如果是0的话就是周日
      currentWeekday = 7
    }
    for (var i = 1; i < currentWeekday; i++) {
      daysArr.push({id: ''})
    }
    var YYMM = moment(date, 'YYYY-MM-DD').format('YYYYMM')
    var nowDate = moment(new Date()).format('YYYYMMDD')
    for (var i = 1; i <= currentMonthDays; i++) {
      var myDate = moment(YYMM + i, 'YYYYMMD').format('YYYYMMDD')
      if (moment(new Date()).date() === moment(myDate, 'YYYYMMDD').date()) {
        daysArr.push({id: i, isSelected: true})
      } else {
        daysArr.push({id: i})
      }
    }
    this.setState({
      dataSource: daysArr
    })
  }
  left = () => {
    this.setState({
      myMonth: moment(this.state.myMonth, 'YYYY年MM月')
        .subtract('month', 1)
        .format('YYYY年MM月')
    })
    this.monthDay(
      moment(this.state.myMonth, 'YYYY年MM月')
        .subtract('month', 1)
        .format('YYYY-MM-DD')
    )
  }
  right = () => {
    this.setState({
      myMonth: moment(this.state.myMonth, 'YYYY年MM月')
        .add('month', 1)
        .format('YYYY年MM月')
    })
    this.monthDay(
      moment(this.state.myMonth, 'YYYY年MM月')
        .add('month', 1)
        .format('YYYY-MM-DD')
    )
  }
  myClickDate = index => {
    let {dataSource} = this.state
    dataSource.forEach(item => {
      item.isSelected = false
    })
    dataSource[index].isSelected = true
    this.setState({
      dataSource: lodash.cloneDeep(dataSource)
    })
    let selectDate = this.state.myMonth + dataSource[index].id + '日'
    this.props.callback(selectDate)
  }
  render() {
    return (
      <View
        style={{
          paddingHorizontal: width * 0.03,
          backgroundColor: this.props.bgColor ? this.props.bgColor : '#ff5754',
          paddingBottom: 10
        }}
      >
        <React.Fragment>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10
                }}
              >
                <TouchableOpacity onPress={this.left} style={styles.leftIcon}>
                  <Text
                    style={{
                      color: this.props.dayColor
                        ? this.props.dayColor
                        : '#FF9900',
                      fontSize: 16
                    }}
                  >
                    上一月{' '}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: width * 0.4,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: this.props.dayColor
                        ? this.props.dayColor
                        : '#FF9900'
                    }}
                  >
                    {this.state.myMonth}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={this.right}
                  style={styles.leftIcon}
                >
                  <Text
                    style={{
                      color: this.props.dayColor
                        ? this.props.dayColor
                        : '#FF9900',
                      fontSize: 16
                    }}
                  >
                    下一月
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', paddingBottom: 10}}>
                <Text
                  style={[styles.line, {color: this.props.headTextColor}]}
                >
                  一
                </Text>
                <Text
                  style={[styles.line, {color: this.props.headTextColor}]}
                >
                  二
                </Text>
                <Text
                  style={[styles.line, {color: this.props.headTextColor}]}
                >
                  三
                </Text>
                <Text
                  style={[styles.line, {color: this.props.headTextColor}]}
                >
                  四
                </Text>
                <Text
                  style={[styles.line, {color: this.props.headTextColor}]}
                >
                  五
                </Text>
                <Text
                  style={[styles.line, {color: this.props.headTextColor}]}
                >
                  六
                </Text>
                <Text
                  style={[styles.line, {color: this.props.headTextColor}]}
                >
                  日
                </Text>
              </View>
            </React.Fragment>
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
              {this.state.dataSource.map((item,index)=>{
                return(
                  <View key={index} style={styles.row}>
                    {item.isSelected ? (
                      <TouchableOpacity
                        onPress={() => this.myClickDate(index)}
                        style={[
                          styles.littleRow,
                          {backgroundColor: this.props.activeBgColor,borderRadius:this.props.borderRadius?this.props.borderRadius:width * 0.2}
                        ]}
                      >
                        <Text style={{color: this.props.activeTextColor}}>
                          {item.id}
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => this.myClickDate(index)}
                        style={[styles.littleRow,{borderRadius:this.props.borderRadius?this.props.borderRadius:width * 0.2}]}
                      >
                        <Text style={{color: this.props.textColor}}>{item.id}</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                )
              })
            }
          </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  line: {
    flex: 1,
    textAlign: 'center',
    color: '#ff8c87'
  },
  row: {
    width: (width * 0.936) / 7,
    height: (width * 0.936) / 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  littleRow: {
    width: width * 0.1,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: width * 0.2
  },
  leftIcon: {
    height: 50,
    width: width * 0.3,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
Calendar.defaultProps = {
  bgColor: '#ff6060',
  headTextColor: '#ff8c87',
  textColor: '#fff',
  activeBgColor: '#fff',
  activeTextColor: '#ff6060'
}
Calendar.PropTypes = {
  bgColor: PropTypes.string.isRequired,
  headTextColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  activeBgColor: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
}

export default Calendar