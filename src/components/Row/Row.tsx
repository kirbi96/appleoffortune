import {stylesCommon} from "../../static";
import {Text, TouchableOpacity, View} from "react-native";
import React, {FC, useEffect, useState} from "react";

interface Props {
    incorrectly: number,
}

const Row = ({incorrectly}: Props) =>{
    const [data, setData] = useState([]);

    const createRow = () =>{
        if ( incorrectly === 1) {
            const arr: [number] = [1, 1, 1, 1, 1]
            const random: number = Math.floor(Math.random() * 5)
            arr[random] = 0
            setData(arr)
        } else if (incorrectly === 2){
            const arr: [number] = [1, 1, 1, 1, 1]
            let random1: number, random2: number

            if(!random1 || !random2 || random2 === random1) {
                random1 = Math.floor(Math.random() * 5)
                random2 = Math.floor(Math.random() * 5)
            }
            arr[random1] = 0;
            arr[random2] = 0;
            setData(arr)
        } else if (incorrectly === 3){
            const arr: [number] = [0, 0, 0, 0, 0]
            let random1: number, random2: number

            if(!random1 || !random2 || random2 === random1) {
                random1 = Math.floor(Math.random() * 5)
                random2 = Math.floor(Math.random() * 5)
            }
            arr[random1] = 1
            arr[random2] = 1
            setData(arr)
        } else if (incorrectly === 4){
            const arr: [number] = [0, 0, 0, 0, 0];
            const random: number = Math.floor(Math.random() * 5)
            arr[random] = 1
            setData(arr)
        }
    }

    // console.log(data)

    useEffect(() =>{
        createRow()
    }, [])

    return(
        <View style={[stylesCommon.flexRow, {marginLeft: "auto", marginRight: "auto", marginTop: 10}]}>
            {data.map((i: number, index: number )=> (
                <TouchableOpacity key={index} style={{paddingVertical: 10, paddingHorizontal: "8%", backgroundColor: "brown", marginLeft: 2}}>
                    <Text>{i}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Row
