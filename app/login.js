import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import SplashScreen from '@remobile/react-native-splashscreen';
import NewFeature from './newFeature';
import GlobalStorage from './globalStorage';

const BuildVersionKey = 'BuildVersionKey';
const BuildVersion = '1.1.1';

export default class Login extends Component {
    componentWillMount() {
        const {isResetFromNewFeature} = this.props;

        if (!isResetFromNewFeature) {
            GlobalStorage.load(BuildVersionKey)
                .then(version => {
                    if (version != BuildVersion) {
                        GlobalStorage.save(BuildVersionKey, BuildVersion);

                        this.props.navigator.resetTo({
                            name: 'NewFeature',
                            component: NewFeature
                        });
                    } else {
                        SplashScreen.hide();
                    }
                })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>登录</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    }
})