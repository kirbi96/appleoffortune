import React, {FC, useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {stylesCommon, stylesText} from "../../../static";
import Row from "../../../components/Row/Row";

const Home: FC = () =>{
    const [activeIndex, setActiveIndex] = useState(1)
    return (
        <View>
            <Text style={stylesText.text}>Apple of fortune!</Text>
            <View style={stylesCommon.mt15}>
                <Row incorrectly={4}/>
                <Row incorrectly={3}/>
                <Row incorrectly={3}/>
                <Row incorrectly={2}/>
                <Row incorrectly={2}/>
                <Row incorrectly={2}/>
                <Row incorrectly={1}/>
                <Row incorrectly={1}/>
                <Row incorrectly={1}/>
                <Row incorrectly={1}/>
            </View>
        </View>
    )
}

export default Home
