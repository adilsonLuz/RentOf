import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface Props {
  cover: any;
  description: string;
  price: string;
  onPress: () => void;
}

const House: React.FC<Props> = (props) => {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>
          <View>
            <Image
            source={props.cover}
            style={styles.cover}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.price}>{props.price}</Text>
          </View>
        </View>
        </TouchableOpacity>
    );
}

export default House;

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      width: 260,
      height: 70,
      backgroundColor: '#FFF',
      elevation: 2,
      padding: 6,
      marginVertical: 5,
      marginRight: 20,
      marginLeft: 2,
      borderRadius: 10,
    },
    cover:{
      borderRadius: 10,
      width: 60,
      height: 60
    },
    content:{
      width: '65%',
      justifyContent:'flex-end',
      paddingHorizontal: 10,
      height: '100%'
    },
    description:{
      fontSize: 9,
      fontFamily: 'Montserrat_500Medium'
    },
    price:{
      fontSize: 12,
      justifyContent:'flex-end',
      fontFamily: 'Montserrat_700Bold',
    }
  });