import React from 'react'
import { Text, View, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import btn_Vazio from '../assets/btn_Vazio.png'

export default function ListaHistorico({data, accessLyrics}) {
    return (
        <View>
            <TouchableOpacity onPress={ () => accessLyrics(data)}>
                <ImageBackground source={btn_Vazio} style={styles.item_listaHistorico}>
                    <Text style={styles.texto}>{data.artista} - {data.musica}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item_listaHistorico: {
        width: 274,
        height: 50,
        marginBottom: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        color: '#FFB703',
        fontSize: 16,
    },
})

