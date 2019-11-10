import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image, View, Text } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { bindActionCreators } from 'redux';
import MyNavigators from './MyNavigators';

const AppNavigation = ({ dispatch, nav }) => {
	return <MyNavigators navigation={addNavigationHelpers({ dispatch, state: nav })} />
};
const mapStateToProps = state => ({
  nav: state.nav,
});
module.exports = connect(mapStateToProps)(AppNavigation);