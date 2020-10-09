import React from 'react'
import { View, Image } from 'react-native'
import dot from '../assets/dot.png'

export default function ThreeDots() {
    return (
        <View style={{alignSelf: 'center', marginTop: 10, marginBottom: 16}}>
            <Image source={dot} />
            <Image source={dot} style={{marginTop: 12}} />
            <Image source={dot} style={{marginTop: 12}} /> 
        </View>
    )      
}