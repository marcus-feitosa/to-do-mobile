import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        backgroundColor : '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 12,
        padding:8

    },
    task:{
        flex: 1,
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
    },
    checkedTask:{
      flex: 1,
      color: '#808080',
      fontSize: 16,
      marginLeft: 16,
      textDecorationLine: 'line-through'
  },
    buttonText:{
        color:  '#FFF', 
        fontSize: 24,
      },
      button:{
        width: 56,
        height: 56,
      
        alignItems : 'center',
        justifyContent: 'center',
      },

})