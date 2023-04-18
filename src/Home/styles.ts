import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

    container:{
      flex:1,
      backgroundColor: '#131016',
      padding: 16,
     
    },
    contentBlock:{
      marginVertical: -80
    },
    

    eventName:{
      color:'#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },

    eventDate:{
      color:'#FDFCFE',
      fontSize: 16,
    },

    input:{
      flex :1,
      marginRight: 12,
      height: 56,
      borderRadius: 5,
      padding: 16,
      color : '#FFF',

      backgroundColor:'#1F1E25',
    },

    buttonText:{
      color:  '#FFF', 
      fontSize: 24,
    },

    button:{
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor:'#1E6F9F',

      alignItems : 'center',
      justifyContent: 'center',
    },

    form:{
      marginTop: 36,
      marginBottom: 42,
      width:'100%',
      flexDirection: 'row',
    },

    particpantsList:{
      gap:8,
    },
    textView:{
      marginTop: 48,
      flexDirection: 'column',
      alignItems: 'center'
    },
    countdown:{
      flexDirection: 'row',
      justifyContent: 'space-between',

      
    },
    createdCountdown:{
      alignItems: 'center'
    },
    createdCountdownText:{
      color:'#4EA8DE'
    },
    concludedCountdown:{

    },
    concludedCountdownText:{
      color:'#8284FA',
    },
    countdownNumberContainer:{
      padding:16,
      borderRadius:40,

      backgroundColor: '#808080'
    },
    countdownNumber:{
      color:'#FFF',
    },
    listEmptyTextBold:{
      marginTop: 8,
      color: '#808080',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    listEmptyText:{
      color: '#808080',
      fontSize: 14,
      textAlign: 'center',
    },
})