import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Component} from "react";
import Heading from './component/Heading';
import {Provider} from "react-redux";

export default class MyComponent extends Component{
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
            <Provider>
                <View style={styles.container}>
                    <Text>Lets build UBER!</Text>
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5'
    },content:{
        flex:1,
        paddingTop:60
    }
})
