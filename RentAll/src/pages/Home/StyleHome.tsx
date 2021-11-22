import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
     paddingHorizontal: 15,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center',
     width: '100%',
     marginVertical: 20, 
    },
    inputArea:{
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      width: '98%',
      backgroundColor:  '#FFF',
      elevation: 2,
      height: 37,
      borderRadius: 10,
    },
    input:{
      fontFamily: 'Montserrat_500Medium',
      paddingHorizontal: 10,
      fontSize: 13,
      width: '90%'
    },
    contentNew:{
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center'
    },
    title:{
      paddingHorizontal: 15,
      fontFamily: 'Montserrat_700Bold',
      fontSize: 18,
      color: '#4f4a4a'
    }
  });

  export default styles;