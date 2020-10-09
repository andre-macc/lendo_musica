import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Text, ScrollView, View, Image, ImageBackground } from 'react-native';
import styles from '../config/styleSheet'
import logo from '../assets/logo.png';
import btn_Buscar from '../assets/btn_Buscar.png';
import btn_UltimasBuscas from '../assets/btn_UltimasBuscas.png';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({navigation}) {
  const [artista, onChangeArtista] = useState('')
  const [musica, onChangeMusica] = useState('')

  function condicionaBusca() {
    if(!artista || !musica){
      console.log('artista ou musica vazio');
      return; 
    }
    else {
      navigation.navigate('Details', {
        artista: artista,
        musica: musica,
      })
    }
  }
  
  return (
    <ScrollView style={styles.homeScreen}>
      <StatusBar barStyle="light-content" style="light" backgroundColor="#000" />
      <LinearGradient 
        colors={['#023047', '#000000']}
        style={styles.linearGradient}
      />
      <Image source={logo} style={styles.logo} />
      <Text style={styles.titulo}>Buscar letra</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.textInputHeader}>Artista</Text>
        <TextInput
          style={styles.textInput}
          placeholder= 'Insira o nome do artista'
          placeholderTextColor= '#5f5f5f'   
          onChangeText={artista => onChangeArtista(artista.replace(/[/]/g,''))}
          value = {artista}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.textInputHeader}>Música</Text>
        <TextInput 
          style={styles.textInput}
          placeholder= 'Insira o nome da música'
          placeholderTextColor= '#5f5f5f'
          onChangeText={musica => onChangeMusica(musica.replace(/[/]/g,''))}
          value = {musica}
        />
      </View>
      <TouchableOpacity style={styles.btn_Buscar} onPress={condicionaBusca}>
        <Image source={btn_Buscar} />
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => {
          navigation.navigate('History')
        }}>
        <ImageBackground style={styles.btn_UltimasBuscas} source={btn_UltimasBuscas}>
          <Text style={{color: '#FFB703', fontSize: 16, fontWeight: 'bold'}}>Últimas buscas</Text>
        </ImageBackground>
      </TouchableOpacity>
    </ScrollView>
  );
}