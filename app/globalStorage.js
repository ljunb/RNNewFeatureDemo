import { AsyncStorage } from 'react-native';

const globalStorage = {

    save: (key, value) => {
        const jsonValue = JSON.stringify(value);
        return AsyncStorage.setItem(key, jsonValue, (error) => {});
    },

    load: (key) => {
        return AsyncStorage.getItem(key)
            .then((data, error) => {
                if (data) return JSON.parse(data);
                return null;
            })
    },
};

export default globalStorage;