import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Navigator
} from 'react-native';
import Login from './login';

export default class Root extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Navigator
                    initialRoute={{ name: 'Login', component: Login }}
                    configureScene={() => {return Navigator.SceneConfigs.PushFromRight}}
                    renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component navigator={navigator} {...route.params}/>
                        }
                    }
                />
            </View>
        )
    }
}