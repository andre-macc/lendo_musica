import React, { useCallback, useEffect, useState } from 'react';
import { Text, ScrollView, View, Image, Pressable, Alert, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../config/styleSheet'
import logo from '../assets/logo.png';
import btn_Buscar from '../assets/btn_Buscar.png'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ListaHistorico from '../components/ListaHistorico';
import ThreeDots from '../components/ThreeDots';

export default function HistoryScreen({navigation}) {
    // Abre histórico
    const [history, updateHistory] = useState([])
    useEffect( () => {
        async function loadHistory() {
          const historyStorage = await AsyncStorage.getItem('@searches')
  
          if(historyStorage)
            updateHistory(JSON.parse(historyStorage))
        }
        loadHistory()
    }, [])

    const accessLyrics = useCallback( (data) => {
        navigation.navigate('Lyrics', {
            artista: data.artista,
            musica: data.musica,
            lyrics: data.letra,
            fromHistory: true,
          })
    } )

    return (
        <View style={styles.homeScreen}>
            <LinearGradient 
                colors={['#023047', '#000000']}
                style={styles.linearGradient}
            />
            <Image source={logo} style={styles.logo} />
            <TouchableOpacity style={styles.bnt_LimparHistorico}
            onPress={ () => {
                AsyncStorage.getAllKeys()
                .then(keys => AsyncStorage.multiRemove(keys))
                .then(() => navigation.navigate('Home'));
            }}>
                <Text style={{fontSize: 18, color: 'white', textDecorationLine: 'underline'}}>Limpar histórico</Text>
            </TouchableOpacity>
            <View style={{marginTop: 25, marginBottom: 10, height: 250}}>
                <FlatList
                data={history}
                keyExtractor={ (item) => String(item.key) }
                renderItem={ ({item}) => <ListaHistorico data={item} accessLyrics={accessLyrics} />}
                />
            </View>
            <ThreeDots />

            <TouchableOpacity style={styles.btn_BuscarBottom} onPress={() => {
              navigation.navigate('Home')
            }}>
                <Image source={btn_Buscar} />
            </TouchableOpacity>
        </View>
    )
}