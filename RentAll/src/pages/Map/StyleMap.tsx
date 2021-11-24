import React from "react";
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      paddingHorizontal: 15,
      
    },  
    mapContainer: {
      flex: 1,
      width: '100%',
      borderRadius: 10,
      overflow: 'hidden',
      marginTop: 15,
      marginBottom: 15,
      elevation: 2,
      
    },  
    map: {
      width: '100%',
      height: '100%',
    },  
    mapMarker: {
      width: 90,
      height: 80, 
    },  
    mapMarkerContainer: {
      width: 100,
      height: 70,
      backgroundColor: '#34CB79',
      flexDirection: 'column',
      borderRadius: 8,
      overflow: 'hidden',
      alignItems: 'center',
      elevation: 2
    },  
    mapMarkerImage: {
      width: 100,
      height: 45,
      resizeMode: 'cover',
      elevation: 2,
    },  
    mapMarkerTitle: {
      flex: 1,
      fontFamily: 'Montserrat_500Medium',
      color: '#fff',
      fontSize: 10,
      lineHeight: 23,
    },
  });

  export default styles;
