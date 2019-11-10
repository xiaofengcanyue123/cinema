import {View, ActivityIndicator} from "react-native";
import {Image} from "react-native-elements";
import React from "react";

export const HOST = 'http://45.76.105.46:8080'

export function renderImages(item) {
    let warp = []
    if (item.imgs.length == 0) {
        warp.push(<View/>)
    } else {
        let rows = Math.ceil(item.imgs.length/3)
        for (let i = 0; i < rows; i++) {
            let tmp = []
            let cols = 3
            let fix = 3
            if (i == (rows - 1) && item.imgs.length%3 != 0) {
                cols = item.imgs.length % 3
            }
            if (item.imgs.length <= 4 && item.imgs.length % 2 == 0) {
                cols = 2
                fix = 2
                rows = item.imgs.length/2
            }
            if (item.imgs.length == 1) {
                fix = 1
            }
            for (let j = 0; j < fix; j++) {
                if (j >= cols) {
                    tmp.push(<View
                        key={i*fix + j}
                        style={{
                        height: 150,
                        flex: 1,
                        backgroundColor: '#ffffff',
                        borderWidth: 3,
                        borderColor: '#ffffff'
                    }}>
                    </View>)
                } else {
                    tmp.push(
                        <View
                            key={i*fix + j}
                            style={[{
                            height: 150,
                            flex: 1,
                            backgroundColor: '#dcdcdc',
                            borderWidth: 3,
                            borderColor: '#ffffff'
                        }, (item.imgs.length <= 4 && item.imgs.length != 3) && {height: 170 + (40 / item.imgs.length)}]}>
                            <Image
                                resizeMode='stretch'
                                style={{height: 144}}
                                source={{uri: item.imgs[i*fix + j]}}
                                PlaceholderContent={<ActivityIndicator />}
                            />
                        </View>
                    )
                }
            }
            warp.push(tmp)
        }
    }
    return warp
}