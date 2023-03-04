import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Component} from "react";
import {Provider} from "react-redux";
import {store} from "./store";

export default class HomeScreen extends Component{
    constructor() {
        super();
        this.state = {
            inputValue:'',
            todos:[],
            type:'All'
        }
    }


    render() {

        return(
            <Provider store={store}>
                <View style={styles.container}>
                    <Text>Lets build UBER!</Text>
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
