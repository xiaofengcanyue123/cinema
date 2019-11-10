import React from 'react'
import {
    StyleSheet
} from 'react-native'

export const  styles = StyleSheet.create({
    smallFont: {
        lineHeight: 20,
        color: '#A6A6A6',
        fontSize: 12
    },
    loadding: {
        marginTop: 100
    },
    star: {
        width: 12,
        height: 12,
        marginRight: 2
    },
    top: {
        height: 40,
        paddingLeft: 18,
        paddingRight: 18,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF'
    },
    title: {
        fontWeight: '900',
        fontSize: 15
    },
    follow: {
        width: 50,
        height: 25,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderColor:'#FF4E65',
        borderRadius:5,
    },
    container: {

        flex: 1,
        backgroundColor: 'white',

        flexDirection:"row",
        flexWrap:"wrap",
    },
    outViewStyle:{
        backgroundColor:"gray",
        alignItems:"center",
        width:100,
        height:100
    },
    imageStyle:{
        width:80,
        height:80
    },
    textStyle:{
        fontSize:15
    },
    separator: {
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: "14%"
    },
    loading: {
        marginTop: 100
    },
    avator: {
        flex: 1,
        paddingTop: 3
    },
    user: {
        flex: 9
    },
    userText: {
        marginLeft: 22,
        fontWeight: '900',
        fontSize: 15
    }
})

module.exports = styles