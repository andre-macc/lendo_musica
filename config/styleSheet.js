import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    linearGradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 450,
    },
    homeScreen: {
      flex: 1,
      backgroundColor: '#000000',
    },
    lyricsScreen: {
      flex: 1,
      backgroundColor: '#FFF'
    },
    logo: {
      width: 232,
      height: 30,
      marginTop: 60,
      marginLeft: 64,
      marginRight: 64,
    },
    voltaBusca: {
      marginTop: 40,
      marginLeft: 43,
    },
    titulo: {
      color: 'white',
      fontSize: 24,
      marginTop: 40,
      textAlign: 'center',
    },
    boxLetra: {
      marginTop: 30,
      marginLeft: 43,
      marginRight: 43,
    },
    tituloMusica: {
      fontSize: 27,
      color: '#023047'
    },
    subtituloMusica: {
      color: '#023047'
    },
    lyricsText: {
      marginTop: 30,
      color: '#023047',
    },
    inputGroup: {
      marginTop: 40,
      marginLeft: 42,
      marginRight: 42,
    },
    textInputHeader: {
      fontSize: 18,
      color: 'white',
    },
    textInput: {
      height: 40,
      marginTop: 10,
      fontSize: 15,
      color: 'white',
      borderBottomWidth: 1,
      borderBottomColor: '#5f5f5f',
      paddingTop: 15,
    },
    btn_Buscar: {
      marginTop: 50,
      marginLeft: 43,
      marginRight: 43,
    },
    btn_BuscarBottom: {
      marginBottom: 53,
      alignSelf: 'center',
    },
    btn_NovaBusca: {
      marginTop: 40,
      marginLeft: 43,
    },
    btn_blueNovaBusca: {
      marginTop: 20,
      marginLeft: 43,
      marginRight: 43,
      marginBottom: 30,
    },
    btn_UltimasBuscas: {
      marginTop: 25,
      marginLeft: 43,
      marginRight: 43,
      width: 274,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bnt_LimparHistorico: {
      marginTop: 40,
      alignSelf: 'center',
    },
    textoAviso: {
      color: 'white',
      fontSize: 16,
      marginLeft: 43,
      marginTop: 40.2,
    },
    textoCurtiu: {
      fontSize: 20,
      color: '#023047',
      marginTop: 40,
      textAlign: 'center',
    },
    musicaBackground: {
      width: 274,
      height: 152,
      marginTop: 38,
      marginLeft: 43,
      marginRight: 43,
      justifyContent: 'flex-end',
    },
    artistaOverImage: {
      color: 'white',
      fontSize: 18,
      marginLeft: 20,
      fontWeight: "bold",
      textShadowColor: 'black',
      textShadowRadius: 3,
    },
    musicaOverImage: {
      color: 'white',
      fontSize: 15,
      marginLeft: 20,
      textShadowColor: 'black',
      textShadowRadius: 3,
      marginBottom: 20,
    },
    textoNaoEncontrou: {
      color: 'white',
      fontSize: 21,
      marginTop: 40,
      marginLeft: 43,
      marginRight: 43,
      textAlign: 'center',
    },
});

export default styles;