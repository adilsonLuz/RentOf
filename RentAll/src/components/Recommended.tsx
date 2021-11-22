import React from "react";
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

interface Props {
  cover: any;
  title: string;
  offer: string;
}

const Recommended:React.FC<Props> = (props) => {
    return (
        <ImageBackground
        source={props.cover}
        style={styles.container}
        blurRadius={2}
        > 
          <Text style={styles.house}>{props.title}</Text>
          <Text style={styles.description}>{props.offer}</Text>
        </ImageBackground>
    )
}

export default Recommended;


const styles = StyleSheet.create({
    container:{
      height: 130,
      width: 230,
      marginRight: 20,
      marginBottom: 40,
      opacity: 0.7,
      backgroundColor: '#000',
      marginLeft: 3,
      padding: 12,
      marginTop: 20,
    },
    house:{
     fontFamily: 'Montserrat_700Bold',
     color: '#FFF',
     fontSize: 15,
    },
    description:{
      fontSize: 12,
      fontFamily: 'Montserrat_700Bold',
      color: '#FFF',
    },
    shadow:{
      textShadowOffset: { width: 1, height: 2},
      textShadowRadius: 3,
      textShadowColor: '#000'
    }
  });