import React from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logo.png';
import styles from '../config/styleSheet';

export default function LoadingScreen() {
    return (
        <View style={styles.homeScreen}>
            <LinearGradient 
            colors={['#023047', '#000000']}
            style={styles.linearGradient}
            />
            <Image source={logo} style={styles.logo} />
            <Text style={styles.titulo}>Procurando...</Text>
            <ActivityIndicator size="large" color="#FFB703" style={{marginTop: 124, alignContent: 'center'}} />
        </View>
    )
}