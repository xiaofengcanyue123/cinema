import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { connect } from 'react-redux'
import { setPasswordAction, setUsernameAction, loginAction } from '../../actions/loginAction'

class AppLogin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    SplashScreen.hide()
  }

  login() {
    let { username, password } = this.state
    // let param = {
    //   method: 'GET',
    //   headers: {
    //     // 'Accept': 'application/json',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: `username=${username}&=${password}`
    // }
    fetch(`http://45.76.105.46:8080/user/login?username=${username}&password=${password}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.result)
        this.props.navigation.navigate('Tab')
      })
      .catch((error) => { alert(error); })

    // if (username === '001' && password === '001')
    //   alert('登录提示', '登录成功')
    // else
    //   alert('登录提示', '账号或密码错误')
  }

  changePage() {
    this.props.navigation.navigate('GesturePd')
  }

  setPassword(value) {
    this.setState({
      password: value
    })
  }

  setUsername(value) {
    this.setState({
      username: value
    })
  }

  render() {
    return (

      <View style={styles.loginAll}>
        <View style={styles.head}>
          <Image style={styles.back} source={require('../../assets/login/back.png')} />
          <Text style={styles.signIn}>注册</Text>
        </View>

        <View style={styles.body}>
          <Image style={styles.logo} source={require('../../assets/login/logo.png')} />
          <TextInput placeholder='账号' onChangeText={(text) => this.props.setUsername(text)}></TextInput>
          <TextInput placeholder='密码' onChangeText={(text) => this.props.setPassword(text)}></TextInput>
          <Button style={styles.button} title='登录' onPress={this.login.bind(this)} />
          <View style={styles.bodyTips}>
            <Text style={styles.tipShort}>短信登陆</Text>
            <Text style={styles.tipShort} onPress={() => { this.changePage() }}>手势密码登录</Text>
            <Text style={styles.tipShort}>忘记密码</Text>
          </View>
        </View>

        <View style={{ height: 60 }}></View>

        <Text style={styles.other}>登录即代表您已经同意
          <Text style={styles.treaty}>《咪咕用户服务协议》</Text>
          和
          <Text style={styles.treaty}>《咪咕隐私权政策》</Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginAll: {
    flex: 1,
    justifyContent: 'space-between'
  },
  head: {
    flexDirection: 'row',
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 15
  },
  signIn: {
    fontSize: 22
  },
  back: {
    width: 50,
    height: 50
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 50
  },
  body: {
    marginLeft: 20,
    marginRight: 20,
    height: 300
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#e11'
  },
  bodyTips: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 15
  },
  tipShort: {
    fontSize: 18
  },
  treaty: {
    color: '#e11',
    fontSize: 14
  },
  other: {
    fontSize: 15,
    color: '#aaa',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20
  }
})

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    password: state.login.password,
    username: state.login.username,
    status: state.login.status
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  //alert(dispatch)
  return {
    login: (username, password) => dispatch(loginAction(username, password)),
    setPassword: (value) => dispatch(Object.assign({}, setPasswordAction, { password: value })),
    setUsername: (value) => dispatch(Object.assign({}, setUsernameAction, { username: value }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLogin);