import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import SplashScreen from '@remobile/react-native-splashscreen';
import Login from './login';

export default class NewFeature extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <Swiper>
                <View style={styles.item}>
                    <Text>新特性1</Text>
                </View>
                <View style={styles.item}>
                    <Text>新特性2</Text>
                </View>
                <TouchableOpacity
                    style={styles.item}
                    onPress={()=>{
                        this.props.navigator.resetTo({
                            name: 'Login',
                            component: Login,
                            params: { isResetFromNewFeature: true }
                        })
                    }}
                >
                    <Text>开始体验</Text>
                </TouchableOpacity>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center'
    }
});