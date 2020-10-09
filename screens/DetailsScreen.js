import React, { useEffect, useState } from 'react';
import { Text, View, Image, Alert, ImageBackground, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logo.png';
import btn_NovaBusca from '../assets/btn_NovaBusca.png';
import meninaSofa from '../assets/meninaSofa.png';
import constants from '../config/constants';
import styles from '../config/styleSheet';
import musicaBackground from '../assets/musicaBackground.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoadingScreen from '../screens/LoadingScreen'

export default function DetailsScreen({route, navigation}) {
    // Recebe parâmetros
    const { artista } = route.params
    const { musica } = route.params

    // Monta URL
    const sArtista = artista.replace(/\s/g, '%20').trim()
    const sMusica = musica.replace(/\s/g, '%20').trim()
    const url = 'https://api.lyrics.ovh/v1/' + sArtista + '/' + sMusica

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

    // Salva histórico
    useEffect( () => {
      if(lyrics != '') {
        async function saveHistory() {
          await AsyncStorage.setItem('@searches', JSON.stringify(history))
        }
        saveHistory()
      }
    }, [history])

    // Salva letra selecionada no histórico e abre a página 'Lyrics'
    function processChoice() {
      const find = history.filter(r => r.musica == musica && r.artista == artista)
      if(find == 0) {
        const newData = {
          key: artista+musica,
          musica: musica,
          artista: artista,
          letra: lyrics
        }
        if(history.length > 9) // == 10, ao chegar no limite de 10 registros, exclui o mais antigo
          updateHistory([newData, ...history.slice(0,9)])
        else 
          updateHistory([newData, ...history])
      }

      navigation.navigate('Lyrics', {
        artista: artista,
        musica: musica,
        lyrics: lyrics,
        fromHistory: false,
      })
    }

    // Busca letra
    const [lyrics, setLyrics] = useState('') // constants.letraTeste
    const axios = require('axios')
    const [isLoading, setLoading] = useState(true) // false para teste  
    
    useEffect( () => {
      async function buscaLetra() {
        try {
          const response = await axios.get(url)
          setLyrics(response.data.lyrics)
          console.log(lyrics)
          setLoading(false)
        } catch(error) {
          console.error(error)
          Alert.alert(
            'Erro',
            '',
            [{ text: 'OK', onPress: () => navigation.navigate('Home') }]
          );
        }
      }
      buscaLetra()
    }, []);
    
    // Tela loading
    if(isLoading) {
      return (
        <LoadingScreen />
      )
    }
    
    // Encontrou letra
    if(!isLoading && lyrics != "") {
      return (
        <View style={styles.homeScreen}>
          <LinearGradient 
            colors={['#023047', '#000000']}
            style={styles.linearGradient}
          />
          <Image source={logo} style={styles.logo} />
          <Text style={styles.titulo}>Letra encontrada</Text>
          <TouchableOpacity onPress={processChoice}> 
            <ImageBackground source={musicaBackground} style={styles.musicaBackground}>
                <Text style={styles.artistaOverImage}>{artista}</Text>
                <Text style={styles.musicaOverImage}>{musica}</Text>
            </ImageBackground>
          </TouchableOpacity>
          <Text style={styles.textoNaoEncontrou}>Não encontrou o que procurava?</Text>
          <TouchableOpacity style={styles.btn_NovaBusca} 
            onPress={() => {
              navigation.navigate('Home')
          }}>
            <Image source={btn_NovaBusca} />
          </TouchableOpacity>
        </View>
      );
      
    } // Não encontrou letra
    else if(!isLoading && lyrics == "") {
      return (
        <View style={styles.homeScreen}>
          <LinearGradient 
            colors={['#023047', '#000000']}
            style={styles.linearGradient}
          />
          <Image source={logo} style={styles.logo} />
          <Text style={styles.titulo}>Letra não encontrada</Text>
          <Image source={meninaSofa} style={{alignSelf: 'center', marginTop: 40,}} />
          <Text style={styles.textoAviso}>{constants.naoEncontrou}</Text>
          <TouchableOpacity style={styles.btn_NovaBusca} 
            onPress={() => {
              navigation.navigate('Home')
            }}>
            <Image source={btn_NovaBusca} />
          </TouchableOpacity>
        </View>
      );
    }
  }