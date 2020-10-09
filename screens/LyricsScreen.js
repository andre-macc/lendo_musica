import React from 'react';
import {Text, View, ScrollView, Image, Pressable} from 'react-native';
import styles from "../config/styleSheet";
import blueLogo from "../assets/blueLogo.png";
import voltaBusca from "../assets/voltaBusca.png";
import blueNovaBusca from "../assets/btn_blueNovaBusca.png";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function LyricsScreen({route, navigation}) {
    const { artista } = route.params
    const { musica } = route.params
    const { lyrics } = route.params
    const { fromHistory } = route.params
    const capitalizedArtista = artista.toUpperCase()

    return (
        <ScrollView style={styles.lyricsScreen}>
            <Image source={blueLogo} style={styles.logo} />
            <TouchableOpacity style={styles.voltaBusca}
                onPress={() => {
                    if(!fromHistory)
                        navigation.navigate('Details')
                    else
                        navigation.navigate('History')
            }}>
                <Image source={voltaBusca} />
            </TouchableOpacity>
            <View style={styles.boxLetra}>
                <Text style={styles.tituloMusica}>{musica}</Text>
                <Text style={styles.subtituloMusica}>CANÇÃO DE {capitalizedArtista}</Text>
                <Text style={styles.lyricsText}>{lyrics}</Text>
            </View>
            <Text style={styles.textoCurtiu}>Curtiu? Busque mais letras.</Text>
            <TouchableOpacity style={styles.btn_blueNovaBusca}
                onPress={() => {
                    navigation.navigate('Home')
            }}>
                <Image source={blueNovaBusca} />
            </TouchableOpacity>
        </ScrollView>
    )
}